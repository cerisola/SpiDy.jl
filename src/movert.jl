include("./SpiDy.jl")
using .SpiDy

using NPZ
using ProgressMeter
using Random
using Statistics
using LinearAlgebra

Δt = 0.15
N = 72_000
tspan = (0., N*Δt)
saveat = ((N*4÷5):1:N)*Δt

# Lorentzian(α, ω0, Γ)
J = LorentzianSD(1., 7., 5.); # prm 5
# J = LorentzianSD(100., 7., 5.); # prm 9

matrix = AnisoCoupling([-sin(π/4) 0. 0.
                        0. 0. 0.
                        cos(π/4) 0. 0.]);

T = 10 .^ LinRange(-3, 3, 12)
Sss = zeros(length(T), 3)

navg = 24
p = Progress(length(T));

for n in 1:length(T)
    noise = ClassicalNoise(T[n]);
    s = zeros(navg, 3)
    Threads.@threads for i in 1:navg
        s0 = [0.8, 0., 0.6] #normalize(rand(3))
        bfields = [bfield(N, Δt, J, noise),
                   bfield(N, Δt, J, noise),
                   bfield(N, Δt, J, noise)];
        sol = diffeqsolver(s0, tspan, J, bfields, matrix; saveat=saveat);
        s[i, :] = mean(sol[2], dims=1)
    end
    Sss[n, :] = mean(s, dims=1)
    next!(p)
end

npzwrite("../notebooks/data_prm5_fix.npz", Dict("T" => T, "S" => Sss))
module SpiDy

using LinearAlgebra
using DifferentialEquations
using FFTW
using Random
using Distributions

include("Noise.jl");
include("SpectralDensity.jl");
include("StochasticField.jl");
include("SpinState.jl");
include("CouplingTensor.jl");
include("Dynamics.jl");

# export external files to build documentation
export Noise, SpectralDensity, StochasticField, SpinState, CouplingTensor, Dynamics
# export structures to build documentation
export ClassicalNoise, QuantumNoise, NoZeroQuantumNoise, GenericSD, LorentzianSD
# export modules and functions to build documentation
export psd, bfield, spectrum, sd, sdoverω, reorgenergy, kernel, diffeqsolver

end
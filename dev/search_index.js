var documenterSearchIndex = {"docs":
[{"location":"noise/#Noise","page":"Noise","title":"Noise","text":"","category":"section"},{"location":"noise/","page":"Noise","title":"Noise","text":"Noise\nClassicalNoise\nQuantumNoise\nNoZeroQuantumNoise\nspectrum(n::ClassicalNoise)\nspectrum(n::QuantumNoise)\nspectrum(n::NoZeroQuantumNoise)","category":"page"},{"location":"noise/#SpiDy.Noise","page":"Noise","title":"SpiDy.Noise","text":"Noise\n\nDefinition of the abstract type Noise.\n\n\n\n\n\n","category":"type"},{"location":"noise/#SpiDy.ClassicalNoise","page":"Noise","title":"SpiDy.ClassicalNoise","text":"ClassicalNoise{TT<:Real}\n\nReturns a ClassicalNoise structure of type Noise built by passing a Real value. This allows for future overloading of the spectrum method.\n\n\n\n\n\n","category":"type"},{"location":"noise/#SpiDy.QuantumNoise","page":"Noise","title":"SpiDy.QuantumNoise","text":"QuantumNoise{TT<:Real}\n\nReturns a QuantumNoise structure of type Noise built by passing a Real value. This allows for future overloading of the spectrum method.\n\n\n\n\n\n","category":"type"},{"location":"noise/#SpiDy.NoZeroQuantumNoise","page":"Noise","title":"SpiDy.NoZeroQuantumNoise","text":"NoZeroQuantumNoise{TT<:Real}\n\nReturns a NoZeroQuantumNoise structure of type Noise built by passing a Real value. This allows for future overloading of the spectrum method.\n\n\n\n\n\n","category":"type"},{"location":"noise/#SpiDy.spectrum-Tuple{ClassicalNoise}","page":"Noise","title":"SpiDy.spectrum","text":"spectrum(n::ClassicalNoise)\n\nReturns the classical noise at temperature n.T as a function of ω. The conditional statement makes sure the function does not divide by zero in case of ω==0.\n\n\n\n\n\n","category":"method"},{"location":"noise/#SpiDy.spectrum-Tuple{QuantumNoise}","page":"Noise","title":"SpiDy.spectrum","text":"spectrum(n::QuantumNoise)\n\nReturns the quantum noise at temperature n.T as a function of ω. The conditional statement makes sure the function does not divide by zero in case of ω==0.\n\n\n\n\n\n","category":"method"},{"location":"noise/#SpiDy.spectrum-Tuple{NoZeroQuantumNoise}","page":"Noise","title":"SpiDy.spectrum","text":"spectrum(n::NoZeroQuantumNoise)\n\nReturns the quantum noise at temperature n.T as a function of ω. The conditional statement makes sure the function does not divide by zero in case of ω==0. It differs from spectrum(n::QuantumNoise) in the fact that the zero-point noise is removed.\n\n\n\n\n\n","category":"method"},{"location":"stochasticfield/#Stochastic-field","page":"Stochastic field","title":"Stochastic field","text":"","category":"section"},{"location":"stochasticfield/","page":"Stochastic field","title":"Stochastic field","text":"bfield(N, Δt, J::GenericSD, noise::Noise; distro=Normal(0., 1/sqrt(Δt)), interpolation=true)","category":"page"},{"location":"stochasticfield/#SpiDy.bfield-Tuple{Any, Any, GenericSD, Noise}","page":"Stochastic field","title":"SpiDy.bfield","text":"bfield(N, Δt, J::GenericSD, noise::Noise, distro=nothing)\n\nReturns the stochastic field b(t). It is evaluated using the Lorentzian spectral density defined by the parameters J, the classical/quantum/quantum-no-zero-energy noise. The sampling of the stochastic noise is done in frequency space. The default stochastic noise is white noise having Gaussian distribution but different distributions can be specified. N defines the number of steps and Δt defines the time step.\n\n\n\n\n\n","category":"method"},{"location":"couplingtensor/#Coupling-tensor","page":"Coupling tensor","title":"Coupling tensor","text":"","category":"section"},{"location":"couplingtensor/","page":"Coupling tensor","title":"Coupling tensor","text":"Coupling\nAnisoCoupling{TT<:AbstractMatrix{T} where {T<:Real}}\nIsoCoupling{TT<:Real}","category":"page"},{"location":"couplingtensor/#SpiDy.Coupling","page":"Coupling tensor","title":"SpiDy.Coupling","text":"Coupling\n\nDefinition of the abstract type Coupling.\n\n\n\n\n\n","category":"type"},{"location":"couplingtensor/#SpiDy.AnisoCoupling","page":"Coupling tensor","title":"SpiDy.AnisoCoupling","text":"AnisoCoupling{TT<:AbstractMatrix{T} where {T<:Real}}\n\nReturns a AnisoCoupling structure of type Coupling built by passing it a 3x3 Matrix{Real} which defines the n-dimentional coupling between the spin and the stochastic fields. The matrix can therefore define a 1D, 2D as well as a 3D coupling. \n\n\n\n\n\n","category":"type"},{"location":"couplingtensor/#SpiDy.IsoCoupling","page":"Coupling tensor","title":"SpiDy.IsoCoupling","text":"IsoCoupling{TT<:Real}\n\nReturns a IsoCoupling of type Coupling built by passing it a single Real value which defines the n-dimentional isotropic coupling between the spin and the stochastic fields.\n\n\n\n\n\n","category":"type"},{"location":"dynamics/#Dynamics","page":"Dynamics","title":"Dynamics","text":"","category":"section"},{"location":"dynamics/","page":"Dynamics","title":"Dynamics","text":"diffeqsolver(s0, tspan, J::LorentzianSD, bfields, matrix::Coupling; S0=1/2, Bext=[0, 0, 1], saveat=[])\ndiffeqsolver(x0, p0, tspan, J::LorentzianSD, bfields, matrix::Coupling; Ω=1.0, saveat=[])","category":"page"},{"location":"dynamics/#SpiDy.diffeqsolver-Tuple{Any, Any, LorentzianSD, Any, Coupling}","page":"Dynamics","title":"SpiDy.diffeqsolver","text":"diffeqsolver(s0, tspan, J::LorentzianSD, bfields, matrix::Coupling; S0=1/2, Bext=[0, 0, 1], saveat=[])\n\nReturns [sol.t, s, sinterp], that is, the vector sol.t of time steps at which the solutions are evaluated, the 3-vector of the solutions s[1], s[2], s[3] evaluated at times sol.t, the 3 functions sinterp(t)[i] interpolations of the solutions s[i] found in the given time span.\n\nThe differential equation solver is built to account for Lorentzian spectral density.\n\nKeyword arguments:\n\nS0 spin length set at default value 1/2, S0=1/2.\nBext external magnetic field set as unit-vector along the z-axis as default, Bext = [0, 0, 1]\nsaveat is an option of the function solve() which allows to only save the solution at the points needed to evaluate the steady-state,\n\ni.e. at late times. Used to optimize memory management and speed of the solver. Default value is an empty list, saveat=[], resulting in the solution saved at optimal time steps withing the entire time span.\n\nExamples\n\njulia> diffeqsolver(s0, tspan, J, bfields, matrix; saveat=((N*4÷5):1:N)*Δt)\n\n\n\n\n\n","category":"method"},{"location":"dynamics/#SpiDy.diffeqsolver-Tuple{Any, Any, Any, LorentzianSD, Any, Coupling}","page":"Dynamics","title":"SpiDy.diffeqsolver","text":"diffeqsolver(x0, p0, tspan, J::LorentzianSD, bfields, matrix::Coupling; Ω=1.0, saveat=[])\n\nReturns [sol.t, x, p, xinterp, pinterp], that is, the vector sol.t of time steps at which the solutions are evaluated, the vectors of the solutions positions x and momenta p evaluated at times sol.t, the functions xinterp(t), pinterp(t) interpolations of the solutions found in the given time span.\n\nThe differential equation solver is built to account for Lorentzian spectral density.\n\nKeyword arguments:\n\nΩ harmonic oscillator bare frequency set as default to Ω=1.0\nsaveat is an option of the function solve() which allows to only save the solution at the points needed to evaluate the steady-state,\n\ni.e. at late times. Used to optimize memory management and speed of the solver. Default value is an empty list, saveat=[], resulting in the solution saved at optimal time steps withing the entire time span.\n\nExamples\n\njulia> diffeqsolver(x0, p0, tspan, J, bfields, matrix; saveat=((N*4÷5):1:N)*Δt)\n\n\n\n\n\n","category":"method"},{"location":"spectraldensity/#Spectral-density","page":"Spectral density","title":"Spectral density","text":"","category":"section"},{"location":"spectraldensity/","page":"Spectral density","title":"Spectral density","text":"GenericSD\nLorentzianSD\nPolySD\nsd(J::GenericSD)\nsdoverω(J::GenericSD)\nsdoverω(J::LorentzianSD)\nsd(J::PolySD)\nreorgenergy(J::GenericSD)\nreorgenergy(J::LorentzianSD)\nkernel(J::LorentzianSD)\nimagkernel(J::GenericSD)\npsd(J::GenericSD, noise::Noise)\npsd(J::LorentzianSD, noise::ClassicalNoise)","category":"page"},{"location":"spectraldensity/#SpiDy.GenericSD","page":"Spectral density","title":"SpiDy.GenericSD","text":"GenericSD\n\nDefinition of the abstract type GenericSD.\n\n\n\n\n\n","category":"type"},{"location":"spectraldensity/#SpiDy.LorentzianSD","page":"Spectral density","title":"SpiDy.LorentzianSD","text":"LorentzianSD{T<:Real}\n\nReturns a LorentzianSD structure of type GenericSD built by passing 3 Real values. The values are ordered as LorentzianSD(α, ω0, Γ).\n\nExamples\n\njulia> LorentzianSD(1., 3., 8.)\n\n\n\n\n\n","category":"type"},{"location":"spectraldensity/#SpiDy.PolySD","page":"Spectral density","title":"SpiDy.PolySD","text":"PolySD{T<:Real}\n\nReturns a PolySD structure of type GenericSD built by passing 3 Real values. The values are ordered as PolySD(s, α, ωcut).\n\nExamples\n\njulia> PolySD(1., 3., 100.)\n\n\n\n\n\n","category":"type"},{"location":"spectraldensity/#SpiDy.sd-Tuple{GenericSD}","page":"Spectral density","title":"SpiDy.sd","text":"sd(J::GenericSD)\n\nDefines the spectral density for generic shapes GenericSD. The returned function depends on ω.\n\n\n\n\n\n","category":"method"},{"location":"spectraldensity/#SpiDy.sdoverω-Tuple{GenericSD}","page":"Spectral density","title":"SpiDy.sdoverω","text":"sdoverω(J::GenericSD)\n\nReturns the spectral density divided by ω for generic shapes GenericSD. The returned function depends on ω.\n\n\n\n\n\n","category":"method"},{"location":"spectraldensity/#SpiDy.sdoverω-Tuple{LorentzianSD}","page":"Spectral density","title":"SpiDy.sdoverω","text":"sdoverω(J::LorentzianSD)\n\nReturns the spectral density divided by ω for LorentzianSD shapes which naturally defines sd(J::LorentzianSD). The returned function depends on ω.\n\n\n\n\n\n","category":"method"},{"location":"spectraldensity/#SpiDy.sd-Tuple{PolySD}","page":"Spectral density","title":"SpiDy.sd","text":"sdoverω(J::PolySD)\n\nReturns the spectral density for PolySD shapes with exponential cut-off which naturally defines sdoverω(J::PolySD). The returned function depends on ω.\n\n\n\n\n\n","category":"method"},{"location":"spectraldensity/#SpiDy.reorgenergy-Tuple{GenericSD}","page":"Spectral density","title":"SpiDy.reorgenergy","text":"reorgenergy(J::GenericSD)\n\nReturns the reorganization energy numerically integrated as int_0^infty textsdoverω(omega)domega.\n\n\n\n\n\n","category":"method"},{"location":"spectraldensity/#SpiDy.reorgenergy-Tuple{LorentzianSD}","page":"Spectral density","title":"SpiDy.reorgenergy","text":"reorgenergy(J::LorentzianSD)\n\nReturns the analytical reorganization energy for LorentzianSD shapes.\n\n\n\n\n\n","category":"method"},{"location":"spectraldensity/#SpiDy.kernel-Tuple{LorentzianSD}","page":"Spectral density","title":"SpiDy.kernel","text":"kernel(J::LorentzianSD)\n\nReturns the specific damping kernel for a Lorentzian spectral density defined by the parameters in J. The returned function depends on ω.\n\n\n\n\n\n","category":"method"},{"location":"spectraldensity/#SpiDy.imagkernel-Tuple{GenericSD}","page":"Spectral density","title":"SpiDy.imagkernel","text":"imagkernel(J::GenericSD)\n\nReturns the imaginary part of the damping kernel for a Generic spectral density real and anti-symmetric in ω. Of this kind, we find Lorentzian spectral densities, and Polynomial spectral densities with sinmathbbN. The spectral density is defined by the parameters in J. The returned function depends on ω.\n\n\n\n\n\n","category":"method"},{"location":"spectraldensity/#SpiDy.psd-Tuple{GenericSD, Noise}","page":"Spectral density","title":"SpiDy.psd","text":"psd(J::GenericSD, noise::Noise)\n\nReturns the power spectral density depending on parameters J and noise. The returned function depends on ω.\n\n\n\n\n\n","category":"method"},{"location":"spectraldensity/#SpiDy.psd-Tuple{LorentzianSD, ClassicalNoise}","page":"Spectral density","title":"SpiDy.psd","text":"psd(J::LorentzianSD, noise::ClassicalNoise)\n\nReturns the analytical expression for power spectrum depending on Lorentzian spectral density and Classical noise. The returned function depends on ω.\n\n\n\n\n\n","category":"method"},{"location":"startwithspidy/#Start-with-SpiDy","page":"Start with SpiDy","title":"Start with SpiDy","text":"","category":"section"},{"location":"startwithspidy/","page":"Start with SpiDy","title":"Start with SpiDy","text":"Spin-Dynamics Julia package. The code is a generalization of the results obtained in the paper \"Quantum Brownian motion for magnets\" to account for arbitrary dimensional system-bath coupling. The system considered is a quantized three-dimensional spin + environment Hamiltonian. The code solves a set of differential equations for the spin vector where the damping accounts for memory, arbitrary noise and arbitrary statistics.","category":"page"},{"location":"startwithspidy/","page":"Start with SpiDy","title":"Start with SpiDy","text":"The classical simulations in anisotropic coupling found in the pre-print \"Quantum-classical correspondence in spin-boson equilibrium states at arbitrary coupling\" have been generated using a very-early-version of this code.","category":"page"},{"location":"startwithspidy/#Install-Julia","page":"Start with SpiDy","title":"Install Julia","text":"","category":"section"},{"location":"startwithspidy/","page":"Start with SpiDy","title":"Start with SpiDy","text":"If you are new to Julia, here is how to install it.","category":"page"},{"location":"startwithspidy/","page":"Start with SpiDy","title":"Start with SpiDy","text":"If you are a Windows/Mac user, download Julia here and run the installer. On Mac, drag-and-drop the app to the Applications.","category":"page"},{"location":"startwithspidy/","page":"Start with SpiDy","title":"Start with SpiDy","text":"If you are a Linux user, just open a terminal and use your package manager, e.g. on Debian-based distros run \"sudo apt-get install julia\", on RedHat-based distros run \"sudo dnf install julia\".","category":"page"},{"location":"startwithspidy/#Install-SpiDy","page":"Start with SpiDy","title":"Install SpiDy","text":"","category":"section"},{"location":"startwithspidy/","page":"Start with SpiDy","title":"Start with SpiDy","text":"Following the Julia General Registry guidelines, the package can be installed as follows. (NB: the entire installation of SpiDy and its dependencies takes about 5 minutes on a bare-bones Julia environment.)","category":"page"},{"location":"startwithspidy/","page":"Start with SpiDy","title":"Start with SpiDy","text":"Start Julia and enter in Pkg REPL mode by pressing ] then run the following,","category":"page"},{"location":"startwithspidy/","page":"Start with SpiDy","title":"Start with SpiDy","text":"add https://github.com/quantum-exeter/SpiDy.jl","category":"page"},{"location":"startwithspidy/","page":"Start with SpiDy","title":"Start with SpiDy","text":"or alternatively run the following lines in your code,","category":"page"},{"location":"startwithspidy/","page":"Start with SpiDy","title":"Start with SpiDy","text":"using Pkg;\nPkg.add(url=\"https://github.com/quantum-exeter/SpiDy.jl\")","category":"page"},{"location":"startwithspidy/#Run-SpiDy","page":"Start with SpiDy","title":"Run SpiDy","text":"","category":"section"},{"location":"startwithspidy/","page":"Start with SpiDy","title":"Start with SpiDy","text":"To run the code,","category":"page"},{"location":"startwithspidy/","page":"Start with SpiDy","title":"Start with SpiDy","text":"save run_dynamics.jl and run_steadystate.jl in your preferred location (right click -> save as... should work to save the file)\nopen the terminal or command line\nrun the following command,","category":"page"},{"location":"startwithspidy/","page":"Start with SpiDy","title":"Start with SpiDy","text":"julia \"path-to-your-file\"/run_dynamics.jl","category":"page"},{"location":"startwithspidy/","page":"Start with SpiDy","title":"Start with SpiDy","text":"where \"path-to-your-file\" is the one where you saved your file. Replace run_dynamics.jl with run_steadystate.jl to run the one of your choice.","category":"page"},{"location":"startwithspidy/","page":"Start with SpiDy","title":"Start with SpiDy","text":"NB: the code can exploit parallel computation. To do this, run your files as","category":"page"},{"location":"startwithspidy/","page":"Start with SpiDy","title":"Start with SpiDy","text":"julia -t 6 \"path-to-your-file\"/run_dynamics.jl","category":"page"},{"location":"startwithspidy/","page":"Start with SpiDy","title":"Start with SpiDy","text":"where you want to replace \"6\" with the number of threads that you wish to use. As a general idea, you do not want to use more than 80% of the number of threads you have available in your machine, e.g. if you have a 4-core CPU, you are likely to have 8 threads and you may want to run the parallelization as indicated above.","category":"page"},{"location":"#SpiDy.jl-documentation","page":"Index","title":"SpiDy.jl documentation","text":"","category":"section"},{"location":"","page":"Index","title":"Index","text":"pages = [\"Index\" => \"index.md\",\n         \"Start with SpiDy\" => \"startwithspidy.md\",\n         \"Noise\" => \"noise.md\",\n         \"Spectral density\" => \"spectraldensity.md\",\n         \"Stochastic field\" => \"stochasticfield.md\",\n         \"Coupling tensor\" => \"couplingtensor.md\",\n         \"Dynamics\" => \"dynamics.md\"])","category":"page"},{"location":"#Index","page":"Index","title":"Index","text":"","category":"section"},{"location":"","page":"Index","title":"Index","text":"","category":"page"}]
}

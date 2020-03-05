# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "jamesot2-theme"
  spec.version       = "1.0.1"
  spec.authors       = ["akyndofgreanishlite"]
  spec.email         = ["jameson.tyler@gmail.com"]

  spec.summary       = "Portfolio theme, v2."
  spec.homepage      = "https://github.com/akyndofgreanishlite/jamesot2-theme"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(assets|_layouts|_includes|_sass|LICENSE|README)}i) }

  spec.add_runtime_dependency 'jekyll', '3.7.3'
  spec.add_runtime_dependency 'jekyll-seo-tag', '2.4.0'
  spec.add_development_dependency 'html-proofer', '~> 3.0'
  spec.add_development_dependency 'rubocop', '~> 0.50'
  spec.add_development_dependency 'w3c_validators', '~> 1.3'
end

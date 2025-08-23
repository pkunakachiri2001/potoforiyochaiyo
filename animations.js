// General Animations and Interactive Effects

// Advanced Typing Effect
class AdvancedTypingEffect {
  constructor(elementId) {
    this.element = document.getElementById(elementId)
    if (!this.element) return

    this.codeSnippets = [
      "// Neural Network Implementation\nclass NeuralNetwork {\n  constructor(layers) {\n    this.weights = this.initializeWeights(layers);\n    this.biases = this.initializeBiases(layers);\n  }\n  \n  forward(input) {\n    return this.layers.reduce((output, layer) => \n      this.sigmoid(this.multiply(layer.weights, output))\n    );\n  }\n}",

      "# Quantum Computing Simulation\nimport numpy as np\nfrom qiskit import QuantumCircuit, execute\n\ndef quantum_fourier_transform(n_qubits):\n    qc = QuantumCircuit(n_qubits)\n    for i in range(n_qubits):\n        qc.h(i)\n        for j in range(i+1, n_qubits):\n            qc.cp(np.pi/2**(j-i), j, i)\n    return qc",

      "// Blockchain Smart Contract\npragma solidity ^0.8.0;\n\ncontract AdvancedDeFi {\n    mapping(address => uint256) private balances;\n    mapping(address => mapping(address => uint256)) private allowances;\n    \n    function stake(uint256 amount) external {\n        require(balances[msg.sender] >= amount);\n        stakingPool += amount;\n        emit Staked(msg.sender, amount);\n    }\n}",

      "// WebAssembly Performance Module\n(module\n  (func $fibonacci (param $n i32) (result i32)\n    (if (result i32)\n      (i32.lt_s (local.get $n) (i32.const 2))\n      (then (local.get $n))\n      (else\n        (i32.add\n          (call $fibonacci (i32.sub (local.get $n) (i32.const 1)))\n          (call $fibonacci (i32.sub (local.get $n) (i32.const 2)))\n        )\n      )\n    )\n  )\n)",
    ]

    this.currentSnippet = 0
    this.currentChar = 0
    this.isDeleting = false
    this.typeSpeed = 50
    this.deleteSpeed = 25
    this.pauseTime = 2000

    this.type()
  }

  type() {
    const snippet = this.codeSnippets[this.currentSnippet]

    if (!this.isDeleting && this.currentChar < snippet.length) {
      this.element.textContent = snippet.substring(0, this.currentChar + 1)
      this.currentChar++
      setTimeout(() => this.type(), this.typeSpeed)
    } else if (this.isDeleting && this.currentChar > 0) {
      this.element.textContent = snippet.substring(0, this.currentChar - 1)
      this.currentChar--
      setTimeout(() => this.type(), this.deleteSpeed)
    } else if (!this.isDeleting && this.currentChar === snippet.length) {
      setTimeout(() => {
        this.isDeleting = true
        this.type()
      }, this.pauseTime)
    } else if (this.isDeleting && this.currentChar === 0) {
      this.isDeleting = false
      this.currentSnippet = (this.currentSnippet + 1) % this.codeSnippets.length
      setTimeout(() => this.type(), this.typeSpeed)
    }
  }
}

// Mouse Trail Effect
class MouseTrailEffect {
  constructor() {
    this.trail = []
    this.maxTrailLength = 20
    this.mouseX = 0
    this.mouseY = 0

    this.init()
    this.animate()
  }

  init() {
    document.addEventListener("mousemove", (e) => {
      this.mouseX = e.clientX
      this.mouseY = e.clientY
    })

    // Create trail elements
    for (let i = 0; i < this.maxTrailLength; i++) {
      const trailElement = document.createElement("div")
      trailElement.className = "mouse-trail"
      trailElement.style.position = "fixed"
      trailElement.style.pointerEvents = "none"
      trailElement.style.zIndex = "9999"
      document.body.appendChild(trailElement)

      this.trail.push({
        element: trailElement,
        x: 0,
        y: 0,
        age: 0,
      })
    }
  }

  animate() {
    this.trail.forEach((point, index) => {
      if (index === 0) {
        point.x = this.mouseX
        point.y = this.mouseY
      } else {
        const prev = this.trail[index - 1]
        point.x += (prev.x - point.x) * 0.3
        point.y += (prev.y - point.y) * 0.3
      }

      const opacity = (this.maxTrailLength - index) / this.maxTrailLength
      const size = opacity * 6 + 2

      point.element.style.left = point.x - size / 2 + "px"
      point.element.style.top = point.y - size / 2 + "px"
      point.element.style.width = size + "px"
      point.element.style.height = size + "px"
      point.element.style.opacity = opacity
    })

    requestAnimationFrame(() => this.animate())
  }
}

// Scroll Animations
class ScrollAnimations {
  constructor() {
    this.observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    this.init()
  }

  init() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = "running"

          // Animate skill bars
          if (entry.target.classList.contains("skill-progress")) {
            const width = entry.target.getAttribute("data-width")
            setTimeout(() => {
              entry.target.style.width = width
            }, 500)
          }
        }
      })
    }, this.observerOptions)

    // Observe elements with fade-in animations
    document.querySelectorAll(".fade-in-up, .slide-in-left, .skill-progress").forEach((el) => {
      el.style.animationPlayState = "paused"
      observer.observe(el)
    })
  }
}

// Navigation Scroll Effect
class NavigationScrollEffect {
  constructor() {
    this.navbar = document.getElementById("navbar")
    this.lastScrollY = window.scrollY

    this.init()
  }

  init() {
    window.addEventListener("scroll", () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > 50) {
        this.navbar.style.background = "rgba(0, 0, 0, 0.95)"
        this.navbar.style.backdropFilter = "blur(10px)"
      } else {
        this.navbar.style.background = "rgba(0, 0, 0, 0.9)"
        this.navbar.style.backdropFilter = "blur(10px)"
      }

      this.lastScrollY = currentScrollY
    })
  }
}

// Mobile Menu Toggle
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu")
  const menuBtn = document.querySelector(".mobile-menu-btn")

  mobileMenu.classList.toggle("active")
  menuBtn.classList.toggle("active")

  // Animate hamburger menu with smoother transitions
  const spans = menuBtn.querySelectorAll("span")
  if (menuBtn.classList.contains("active")) {
    spans[0].style.transform = "rotate(45deg) translate(5px, 5px)"
    spans[0].style.transition = "transform 0.3s ease"
    spans[1].style.opacity = "0"
    spans[1].style.transition = "opacity 0.3s ease"
    spans[2].style.transform = "rotate(-45deg) translate(7px, -6px)"
    spans[2].style.transition = "transform 0.3s ease"

    // Add slide-down animation to mobile menu
    mobileMenu.style.maxHeight = "300px"
    mobileMenu.style.opacity = "1"
  } else {
    spans[0].style.transform = "none"
    spans[1].style.opacity = "1"
    spans[2].style.transform = "none"

    // Add slide-up animation to mobile menu
    mobileMenu.style.maxHeight = "0"
    mobileMenu.style.opacity = "0"
  }
}

// WhatsApp Integration Helper
function openWhatsApp(message = "Hi MR PKUNAKA, I found your portfolio and would like to connect") {
  const phoneNumber = "1234567890" // Replace with actual WhatsApp number
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
  window.open(whatsappUrl, "_blank")
}

// Resume Download Functionality
function downloadResume() {
  // Create a temporary link element
  const link = document.createElement("a")
  link.href = "/resume-mr-pkunaka.pdf" // You'll need to add this PDF file
  link.download = "MR_PKUNAKA_Resume.pdf"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)

  // Alternative: Generate PDF from HTML (requires jsPDF library)
  // This is a placeholder - you'd need to implement actual PDF generation
  console.log("[v0] Resume download initiated")
}

// Enhanced Contact Form with better validation
class ContactFormHandler {
  constructor() {
    this.form = document.querySelector(".contact-form")
    this.successMessage = document.getElementById("formSuccess")

    if (this.form) {
      this.init()
    }
  }

  init() {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault()
      if (this.validateForm()) {
        this.handleSubmit()
      }
    })

    // Add real-time validation
    this.form.querySelectorAll("input, textarea").forEach((field) => {
      field.addEventListener("blur", () => this.validateField(field))
    })
  }

  validateField(field) {
    const value = field.value.trim()
    let isValid = true
    let errorMessage = ""

    switch (field.type) {
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        isValid = emailRegex.test(value)
        errorMessage = "Please enter a valid email address"
        break
      case "text":
        isValid = value.length >= 2
        errorMessage = "This field must be at least 2 characters long"
        break
      default:
        isValid = value.length > 0
        errorMessage = "This field is required"
    }

    this.showFieldValidation(field, isValid, errorMessage)
    return isValid
  }

  showFieldValidation(field, isValid, errorMessage) {
    // Remove existing error message
    const existingError = field.parentNode.querySelector(".field-error")
    if (existingError) {
      existingError.remove()
    }

    if (!isValid) {
      field.style.borderColor = "#ef4444"
      const errorDiv = document.createElement("div")
      errorDiv.className = "field-error"
      errorDiv.style.color = "#ef4444"
      errorDiv.style.fontSize = "0.8rem"
      errorDiv.style.marginTop = "0.25rem"
      errorDiv.textContent = errorMessage
      field.parentNode.appendChild(errorDiv)
    } else {
      field.style.borderColor = "var(--accent-cyan)"
    }
  }

  validateForm() {
    const fields = this.form.querySelectorAll("input[required], textarea[required]")
    let isFormValid = true

    fields.forEach((field) => {
      if (!this.validateField(field)) {
        isFormValid = false
      }
    })

    return isFormValid
  }

  async handleSubmit() {
    const formData = new FormData(this.form)
    const submitBtn = this.form.querySelector(".submit-btn")

    // Show loading state with spinner
    submitBtn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="animation: spin 1s linear infinite;">
        <path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"/>
      </svg>
      <span>Sending...</span>
    `
    submitBtn.disabled = true

    try {
      const response = await fetch(this.form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        this.showSuccess()
        this.form.reset()
        // Clear any validation styles
        this.form.querySelectorAll("input, textarea").forEach((field) => {
          field.style.borderColor = "var(--border-glow)"
          const errorDiv = field.parentNode.querySelector(".field-error")
          if (errorDiv) errorDiv.remove()
        })
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      this.showError("There was an error sending your message. Please try again or contact me directly via WhatsApp.")
    } finally {
      submitBtn.innerHTML = "<span>Send Message</span><div class='btn-shine'></div>"
      submitBtn.disabled = false
    }
  }

  showError(message) {
    const errorDiv = document.createElement("div")
    errorDiv.className = "form-error"
    errorDiv.style.cssText = `
      background: rgba(239, 68, 68, 0.1);
      border: 1px solid #ef4444;
      color: #ef4444;
      padding: 1rem;
      border-radius: 8px;
      margin-top: 1rem;
      text-align: center;
    `
    errorDiv.textContent = message

    this.form.appendChild(errorDiv)

    setTimeout(() => {
      errorDiv.remove()
    }, 5000)
  }

  showSuccess() {
    this.form.style.display = "none"
    this.successMessage.classList.add("show")

    setTimeout(() => {
      this.successMessage.classList.remove("show")
      this.form.style.display = "block"
    }, 5000)
  }
}

// Quantum Particle Orbit Effect
class QuantumParticleOrbit {
  constructor() {
    this.particles = []
    this.count = 24
    this.radius = 40
    this.center = {x: window.innerWidth/2, y: window.innerHeight/2}
    this.init()
    this.animate()
  }
  init() {
    for (let i = 0; i < this.count; i++) {
      const el = document.createElement('div')
      el.className = 'quantum-particle'
      document.body.appendChild(el)
      this.particles.push(el)
    }
    document.addEventListener('mousemove', e => {
      this.center.x = e.clientX
      this.center.y = e.clientY
    })
  }
  animate() {
    const time = Date.now() * 0.002
    this.particles.forEach((el, i) => {
      const angle = (i / this.count) * Math.PI * 2 + time
      const x = this.center.x + Math.cos(angle) * this.radius
      const y = this.center.y + Math.sin(angle) * this.radius
      el.style.left = x + 'px'
      el.style.top = y + 'px'
    })
    requestAnimationFrame(() => this.animate())
  }
}
document.addEventListener("DOMContentLoaded", () => {
  new QuantumParticleOrbit()
})

// AI Quote Display
const aiQuotes = [
  "The future is quantum. The present is neural.",
  "Machines learn, humans imagine.",
  "Blockchain: Trust in code.",
  "WebAssembly: Speed of thought.",
  "AI: The new electricity.",
  "In 2080, engineers are algorithms."
]
function showAIQuote() {
  const el = document.createElement('div')
  el.className = 'ai-quote'
  document.querySelector('.hero-content').appendChild(el)
  let idx = 0
  function typeQuote() {
    el.textContent = ''
    let quote = aiQuotes[idx % aiQuotes.length]
    let i = 0
    function type() {
      if (i < quote.length) {
        el.textContent += quote[i++]
        setTimeout(type, 40)
      } else {
        setTimeout(() => {
          idx++
          typeQuote()
        }, 3000)
      }
    }
    type()
  }
  typeQuote()
}
document.addEventListener("DOMContentLoaded", showAIQuote)

// Glowing Scroll Progress Bar
window.addEventListener('scroll', () => {
  const scrollBar = document.getElementById('scroll-progress')
  if (scrollBar) {
    const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
    scrollBar.style.width = scrolled + '%'
  }
})

// Live Code Samples Typing Effect
document.addEventListener("DOMContentLoaded", function() {
    const codeSamples = [
`// Quantum Neural Network
class QuantumNet {
  constructor(qubits) {
    this.qubits = qubits;
  }
  superpose() {
    // Apply quantum superposition
  }
  entangle() {
    // Entangle qubits
  }
}`,
`// Blockchain Smart Contract
contract AIEngineer {
  function deploy() public {
    // Deploy contract to chain
  }
}`,
`// WebAssembly ML Inference
import { runModel } from 'wasm-ml';
runModel('neural.onnx', inputData);`
    ];
    const codeEl = document.getElementById('liveCode');
    const cursorEl = document.querySelector('.cursor');
    let sampleIdx = 0;
    let charIdx = 0;
    let typing = true;

    function typeSample() {
        if (!codeEl) return;
        const code = codeSamples[sampleIdx % codeSamples.length];
        if (charIdx <= code.length) {
            codeEl.textContent = code.slice(0, charIdx);
            charIdx++;
            cursorEl.style.opacity = charIdx % 2 ? 1 : 0.5;
            setTimeout(typeSample, 30);
        } else {
            typing = false;
            setTimeout(() => {
                sampleIdx++;
                charIdx = 0;
                typing = true;
                typeSample();
            }, 2000);
        }
    }
    typeSample();
});

// Neural Network and Canvas Animations
class NeuralNetworkAnimation {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId)
    if (!this.canvas) return

    this.ctx = this.canvas.getContext("2d")
    this.nodes = []
    this.nodeCount = 50
    this.animationId = null

    this.init()
    this.createNodes()
    this.animate()
    this.handleResize()
  }

  init() {
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight
  }

  createNodes() {
    this.nodes = []
    for (let i = 0; i < this.nodeCount; i++) {
      this.nodes.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        connections: [],
        activity: Math.random(),
      })
    }

    // Create connections
    this.nodes.forEach((node, i) => {
      const connectionCount = Math.floor(Math.random() * 5) + 2
      for (let j = 0; j < connectionCount; j++) {
        const targetIndex = Math.floor(Math.random() * this.nodeCount)
        if (targetIndex !== i && !node.connections.includes(targetIndex)) {
          node.connections.push(targetIndex)
        }
      }
    })
  }

  animate() {
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)

    this.nodes.forEach((node, i) => {
      // Update position
      node.x += node.vx
      node.y += node.vy

      // Bounce off edges
      if (node.x < 0 || node.x > this.canvas.width) node.vx *= -1
      if (node.y < 0 || node.y > this.canvas.height) node.vy *= -1

      // Update activity
      node.activity = Math.sin(Date.now() * 0.001 + i) * 0.5 + 0.5

      // Draw connections
      node.connections.forEach((targetIndex) => {
        const target = this.nodes[targetIndex]
        const distance = Math.sqrt((node.x - target.x) ** 2 + (node.y - target.y) ** 2)

        if (distance < 200) {
          const opacity = (1 - distance / 200) * node.activity
          this.ctx.strokeStyle = `rgba(0, 255, 255, ${opacity})`
          this.ctx.lineWidth = opacity * 2
          this.ctx.beginPath()
          this.ctx.moveTo(node.x, node.y)
          this.ctx.lineTo(target.x, target.y)
          this.ctx.stroke()
        }
      })

      // Draw node
      const radius = 3 + node.activity * 5
      const gradient = this.ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, radius)
      gradient.addColorStop(0, `rgba(255, 0, 255, ${node.activity})`)
      gradient.addColorStop(1, "rgba(255, 0, 255, 0)")

      this.ctx.fillStyle = gradient
      this.ctx.beginPath()
      this.ctx.arc(node.x, node.y, radius, 0, Math.PI * 2)
      this.ctx.fill()
    })

    this.animationId = requestAnimationFrame(() => this.animate())
  }

  handleResize() {
    window.addEventListener("resize", () => {
      this.canvas.width = window.innerWidth
      this.canvas.height = window.innerHeight
      this.createNodes()
    })
  }

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId)
    }
  }
}

// Matrix Rain Animation
class MatrixRainAnimation {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId)
    if (!this.canvas) return

    this.ctx = this.canvas.getContext("2d")
    this.chars = []
    this.matrixChars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン"
    this.animationId = null

    this.init()
    this.createChars()
    this.animate()
    this.handleResize()
  }

  init() {
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight
  }

  createChars() {
    this.chars = []
    const columns = Math.floor(this.canvas.width / 20)

    for (let i = 0; i < columns; i++) {
      this.chars.push({
        x: i * 20,
        y: Math.random() * this.canvas.height,
        speed: Math.random() * 3 + 1,
        char: this.matrixChars[Math.floor(Math.random() * this.matrixChars.length)],
        opacity: Math.random(),
      })
    }
  }

  animate() {
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)

    this.chars.forEach((char) => {
      char.y += char.speed
      char.opacity = Math.sin(char.y * 0.01) * 0.5 + 0.5

      if (char.y > this.canvas.height) {
        char.y = -20
        char.char = this.matrixChars[Math.floor(Math.random() * this.matrixChars.length)]
      }

      this.ctx.fillStyle = `rgba(0, 255, 0, ${char.opacity * 0.3})`
      this.ctx.font = "16px monospace"
      this.ctx.fillText(char.char, char.x, char.y)
    })

    this.animationId = requestAnimationFrame(() => this.animate())
  }

  handleResize() {
    window.addEventListener("resize", () => {
      this.canvas.width = window.innerWidth
      this.canvas.height = window.innerHeight
      this.createChars()
    })
  }

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId)
    }
  }
}

// 3D Particle System
class ParticleSystemAnimation {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId)
    if (!this.canvas) return

    this.ctx = this.canvas.getContext("2d")
    this.particles = []
    this.particleCount = 100
    this.animationId = null

    this.init()
    this.createParticles()
    this.animate()
    this.handleResize()
  }

  init() {
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight
  }

  createParticles() {
    this.particles = []
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        z: Math.random() * 1000,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        vz: Math.random() * 5 + 1,
        life: Math.random() * 100,
        maxLife: 100,
      })
    }
  }

  animate() {
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)

    this.particles.forEach((particle) => {
      particle.x += particle.vx
      particle.y += particle.vy
      particle.z -= particle.vz
      particle.life--

      if (particle.z <= 0 || particle.life <= 0) {
        particle.x = Math.random() * this.canvas.width
        particle.y = Math.random() * this.canvas.height
        particle.z = 1000
        particle.life = particle.maxLife
      }

      const scale = 500 / particle.z
      const x2d = particle.x * scale + this.canvas.width / 2
      const y2d = particle.y * scale + this.canvas.height / 2
      const size = scale * 2

      const opacity = particle.life / particle.maxLife
      this.ctx.fillStyle = `rgba(100, 200, 255, ${opacity})`
      this.ctx.beginPath()
      this.ctx.arc(x2d, y2d, size, 0, Math.PI * 2)
      this.ctx.fill()
    })

    this.animationId = requestAnimationFrame(() => this.animate())
  }

  handleResize() {
    window.addEventListener("resize", () => {
      this.canvas.width = window.innerWidth
      this.canvas.height = window.innerHeight
      this.createParticles()
    })
  }

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId)
    }
  }
}

// Initialize animations when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Only initialize on home page
  if (document.getElementById("neuralCanvas")) {
    new NeuralNetworkAnimation("neuralCanvas")
    new MatrixRainAnimation("matrixCanvas")
    new ParticleSystemAnimation("particleCanvas")
  }
})

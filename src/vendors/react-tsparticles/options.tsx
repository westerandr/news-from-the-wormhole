import { IOptions, ISourceOptions, RecursivePartial } from 'tsparticles'

const particlesOptions: ISourceOptions = {
  autoPlay: true,
  background: {
    color: {
      value: '#000000'
    },
    position: '50% 50%',
    repeat: 'no-repeat',
    size: 'cover',
    opacity: 1
  },
  backgroundMask: {
    composite: 'destination-out',
    cover: {
      color: {
        value: '#fff'
      },
      opacity: 1
    },
    enable: false
  },
  fullScreen: {
    enable: true,
    zIndex: -1
  },
  detectRetina: true,
  duration: 0,
  fpsLimit: 40,
  manualParticles: [],
  motion: {
    disable: false,
    reduce: {
      factor: 4,
      value: true
    }
  },
  particles: {
    bounce: {
      horizontal: {
        random: {
          enable: false,
          minimumValue: 0.1
        },
        value: 1
      },
      vertical: {
        random: {
          enable: false,
          minimumValue: 0.1
        },
        value: 1
      }
    },
    collisions: {
      bounce: {
        horizontal: {
          random: {
            enable: false,
            minimumValue: 0.1
          },
          value: 1
        },
        vertical: {
          random: {
            enable: false,
            minimumValue: 0.1
          },
          value: 1
        }
      },
      enable: false,
      mode: 'bounce',
      overlap: {
        enable: true,
        retries: 0
      }
    },
    color: {
      value: '#fff',
      animation: {
        h: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 20,
          sync: true
        },
        s: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          sync: true
        },
        l: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          sync: true
        }
      }
    },
    groups: {
      z5000: {
        number: {
          value: 70
        },
        zIndex: {
          value: 5000
        }
      },
      z7500: {
        number: {
          value: 30
        },
        zIndex: {
          value: 7500
        }
      },
      z2500: {
        number: {
          value: 50
        },
        zIndex: {
          value: 2500
        }
      },
      z1000: {
        number: {
          value: 40
        },
        zIndex: {
          value: 1000
        }
      }
    },
    life: {
      count: 0,
      delay: {
        random: {
          enable: false,
          minimumValue: 0
        },
        value: 0,
        sync: false
      },
      duration: {
        random: {
          enable: false,
          minimumValue: 0.0001
        },
        value: 0,
        sync: false
      }
    },
    links: {
      blink: false,
      color: {
        value: '#ffffff'
      },
      consent: false,
      distance: 100,
      enable: false,
      frequency: 1,
      opacity: 0.4,
      shadow: {
        blur: 5,
        color: {
          value: '#00ff00'
        },
        enable: false
      },
      triangles: {
        enable: false,
        frequency: 1
      },
      width: 1,
      warp: false
    },
    move: {
      angle: {
        offset: 0,
        value: 10
      },
      attract: {
        distance: 200,
        enable: false,
        rotate: {
          x: 600,
          y: 1200
        }
      },
      decay: 0,
      distance: {},
      direction: 'right',
      drift: 0,
      enable: true,
      gravity: {
        acceleration: 6,
        enable: false,
        inverse: false,
        maxSpeed: 50
      },
      path: {
        clamp: true,
        delay: {
          random: {
            enable: false,
            minimumValue: 0
          },
          value: 0
        },
        enable: false
      },
      outModes: {
        default: 'out',
        bottom: 'out',
        left: 'out',
        right: 'out',
        top: 'out'
      },
      random: false,
      size: false,
      speed: 5,
      spin: {
        acceleration: 0,
        enable: false
      },
      straight: false,
      trail: {
        enable: false,
        length: 10,
        fillColor: {
          value: '#000000'
        }
      },
      vibrate: false,
      warp: false
    },
    number: {
      density: {
        enable: false,
        area: 800,
        factor: 1000
      },
      limit: 0,
      value: 200
    },
    opacity: {
      random: {
        enable: false,
        minimumValue: 0.1
      },
      value: 1,
      animation: {
        count: 0,
        enable: false,
        speed: 3,
        sync: false,
        destroy: 'none',
        minimumValue: 0.1,
        startValue: 'random'
      }
    },
    orbit: {
      animation: {
        count: 0,
        enable: false,
        speed: 1,
        sync: false
      },
      enable: false,
      opacity: 1,
      rotation: {
        random: {
          enable: false,
          minimumValue: 0
        },
        value: 45
      },
      width: 1
    },
    reduceDuplicates: false,
    repulse: {
      random: {
        enable: false,
        minimumValue: 0
      },
      value: 0,
      enabled: false,
      distance: 1,
      duration: 1,
      factor: 1,
      speed: 1
    },
    roll: {
      darken: {
        enable: false,
        value: 0
      },
      enable: false,
      enlighten: {
        enable: false,
        value: 0
      },
      speed: 25
    },
    rotate: {
      random: {
        enable: false,
        minimumValue: 0
      },
      value: 0,
      animation: {
        enable: false,
        speed: 0,
        sync: false
      },
      direction: 'clockwise',
      path: false
    },
    shadow: {
      blur: 0,
      color: {
        value: '#000000'
      },
      enable: false,
      offset: {
        x: 0,
        y: 0
      }
    },
    shape: {
      options: {},
      type: 'circle'
    },
    size: {
      random: {
        enable: false,
        minimumValue: 1
      },
      value: 3,
      animation: {
        count: 0,
        enable: false,
        speed: 5,
        sync: false,
        destroy: 'none',
        minimumValue: 0,
        startValue: 'random'
      }
    },
    stroke: {
      width: 0
    },
    tilt: {
      random: {
        enable: false,
        minimumValue: 0
      },
      value: 0,
      animation: {
        enable: false,
        speed: 0,
        sync: false
      },
      direction: 'clockwise',
      enable: false
    },
    twinkle: {
      lines: {
        enable: false,
        frequency: 0.05,
        opacity: 1
      },
      particles: {
        enable: false,
        frequency: 0.05,
        opacity: 1
      }
    },
    wobble: {
      distance: 5,
      enable: false,
      speed: 50
    },
    zIndex: {
      random: {
        enable: false,
        minimumValue: 0
      },
      value: 500,
      opacityRate: 0.5,
      sizeRate: 1,
      velocityRate: 1
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'bubble'
      },
      onclick: {
        enable: true,
        mode: 'repulse'
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 250,
        size: 0,
        duration: 2,
        opacity: 0
      },
      repulse: {
        distance: 400,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  responsive: [],
  themes: [],
  emitters: {
    autoPlay: true,
    life: {},
    rate: {
      quantity: 1,
      delay: 7
    },
    size: {
      mode: 'percent',
      height: 0,
      width: 0
    },
    position: {
      x: -5,
      y: 55
    }
  }
}

export default particlesOptions

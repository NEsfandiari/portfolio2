import React, { Component } from 'react'
import * as THREE from 'three'
import styled from 'styled-components'

const Container = styled.div`
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.9;
`

export default class GLView extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount = () => {
    this.setupCamera()
    this.setupRenderer()
    this.setupScene()
    this.setupLights()
    this.animate()
  }

  setupCamera = () => {
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    this.camera.position.z = 4
  }

  setupRenderer = () => {
    this.renderer = new THREE.WebGLRenderer({ alpha: true })
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    document.querySelector('.body').appendChild(this.renderer.domElement)
  }

  setupScene = () => {
    this.scene = new THREE.Scene()
    const box = new THREE.BoxGeometry(1, 1, 1)
    const octo = new THREE.OctahedronGeometry(0.7, 3)
    const cylinder = new THREE.CylinderGeometry()
    const pyramid = new THREE.TetrahedronGeometry()
    const donut = new THREE.TorusGeometry(1, 0, 15, 25)

    const loader = new THREE.TextureLoader()

    // lipslut
    const lipslut = require('../images/lipslut.jpeg')
    const texture = loader.load(lipslut)
    const material = new THREE.MeshPhongMaterial({
      shinyness: 20,
      map: texture,
    })
    // groupmuse
    const groupmuse = require('../images/groupmuse.png')
    const texture2 = loader.load(groupmuse)
    const material2 = new THREE.MeshPhongMaterial({
      shinyness: 20,
      map: texture2,
    })

    // cherries
    const cherries = require('../images/cherries.jpg')
    const texture3 = loader.load(cherries)
    const material3 = new THREE.MeshPhongMaterial({
      shinyness: 60,
      map: texture3,
    })

    // Memory Game
    const pokemon = require('../images/pikachu.jpg')
    const texture4 = loader.load(pokemon)
    const material4 = new THREE.MeshPhongMaterial({
      shinyness: 20,
      map: texture4,
    })

    // Warbler
    const warbler = require('../images/warbler.jpg')
    const texture5 = loader.load(warbler)
    const material5 = new THREE.MeshPhongMaterial({
      shinyness: 20,
      map: texture5,
    })

    this.lipslut = new THREE.Mesh(box, material)
    this.groupmuse = new THREE.Mesh(donut, material2)
    this.cherries = new THREE.Mesh(octo, material3)
    this.memory = new THREE.Mesh(pyramid, material4)
    this.warbler = new THREE.Mesh(cylinder, material5)

    this.scene.add(this.lipslut)
    this.scene.add(this.groupmuse)
    this.scene.add(this.cherries)
    this.scene.add(this.memory)
    this.scene.add(this.warbler)
  }

  setupLights = () => {
    this.light = new THREE.PointLight('white')
    this.light.position.set(0, -3, 4)
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.2)

    this.scene.add(this.light)
    this.scene.add(this.ambientLight)
  }

  animate = () => {
    requestAnimationFrame(this.animate)
    this.lipslut.rotation.x += 0.01
    this.lipslut.rotation.y += 0.01

    this.groupmuse.rotation.x -= 0.01
    this.groupmuse.rotation.y -= 0.01
    this.groupmuse.position.set(-5, 0, -2)

    this.cherries.rotation.x -= 0.01
    this.cherries.rotation.y -= 0.01
    this.cherries.position.set(4, 0, -1)

    this.memory.rotation.x += 0.01
    this.memory.rotation.y += 0.01
    this.memory.position.set(0, 2.7, -1)

    this.warbler.rotation.x -= 0.01
    this.warbler.rotation.y -= 0.01
    this.warbler.position.set(0, -3.8, -2.5)
    if (this.props.camera !== 'original') {
      switch (this.props.camera) {
        case 'lipslut':
          this.camera.position.set(
            this['lipslut'].position.x,
            this['lipslut'].position.y + -0.15,
            this['lipslut'].position.z + 2
          )
          break
        case 'groupmuse':
          this.camera.position.set(
            this['groupmuse'].position.x + 0.3,
            this['groupmuse'].position.y + -0.15,
            this['groupmuse'].position.z + 2.5
          )
          break
        case 'cherries':
          this.camera.position.set(
            this['cherries'].position.x + 0.3,
            this['cherries'].position.y + -0.15,
            this['cherries'].position.z + 2
          )
          break
        case 'warbler':
          this.camera.position.set(
            this['warbler'].position.x + 0.3,
            this['warbler'].position.y + -0.15,
            this['warbler'].position.z + 2.3
          )
          break
        case 'memory':
          this.camera.position.set(
            this['memory'].position.x + 0.1,
            this['memory'].position.y + -0.15,
            this['memory'].position.z + 2
          )
          break
      }
    }
    console.log(this.camera.position)

    this.renderer.render(this.scene, this.camera)
  }

  render() {
    return <Container className="body" onClick={this.click} />
  }
}

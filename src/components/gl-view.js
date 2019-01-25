import React, { Component } from 'react'
import * as THREE from 'three'
import styled from 'styled-components'

const Container = styled.div`
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
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
    var geometry = new THREE.BoxGeometry(1, 1, 1)
    var loader = new THREE.TextureLoader()
    // lipslut
    let lipslut = require('../images/lipslut.jpeg')
    var texture = loader.load(lipslut)
    var material = new THREE.MeshPhongMaterial({
      shinyness: 20,
      map: texture,
    })
    // groupmuse
    var groupmuse = require('../images/groupmuse.png')
    var texture2 = loader.load(groupmuse)
    var material2 = new THREE.MeshPhongMaterial({
      shinyness: 20,
      map: texture2,
    })

    this.cube = new THREE.Mesh(geometry, material)
    this.cube2 = new THREE.Mesh(geometry, material2)
    this.scene.add(this.cube)
    this.scene.add(this.cube2)
  }

  setupLights = () => {
    this.light = new THREE.PointLight('white')
    this.light.position.set(0, 0, 4)
    this.scene.add(this.light)
  }

  animate = () => {
    requestAnimationFrame(this.animate)
    this.cube.rotation.x += 0.01
    this.cube.rotation.y += 0.01
    this.cube2.rotation.x -= 0.01
    this.cube2.rotation.y -= 0.01
    this.cube2.position.set(-2, 0, -0.5)
    this.renderer.render(this.scene, this.camera)
  }

  render() {
    debugger
    return <Container className="body" />
  }
}

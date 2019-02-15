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
    const material = new THREE.MeshPhongMaterial({
      shinyness: 20,
      color: 'grey',
    })
    this.box = new THREE.Mesh(box, material)
    this.scene.add(this.box)
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
    this.renderer.render(this.scene, this.camera)
  }

  render() {
    return <Container className="body" onClick={this.click} />
  }
}

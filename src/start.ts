import * as THREE from 'three'

// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export function start() {
  const camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    10
  )

  camera.position.z = 1

  const scene = new THREE.Scene()

  const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2)
  const material = new THREE.MeshNormalMaterial()

  const mesh = new THREE.Mesh(geometry, material)

  scene.add(mesh)

  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  // renderer.setAnimationLoop(animation);
  document.body.appendChild(renderer.domElement)

  // const controls = new OrbitControls(camera, renderer.domElement)

  // animation

  // function animation(time: number) {
  //   mesh.rotation.x = time / 2000
  //   mesh.rotation.y = time / 1000

  //   renderer.render(scene, camera)
  // }

  function render() {
    renderer.render(scene, camera)
    requestAnimationFrame(render)
  }

  render()
}

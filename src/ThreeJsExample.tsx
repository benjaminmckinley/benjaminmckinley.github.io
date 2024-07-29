import * as THREE from 'three'

import { useEffect, useRef } from 'react'

function ThreeJsExample() {
    const refContainer = useRef(null)

    useEffect(() => {
        let scene = new THREE.Scene()
        let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        let renderer = new THREE.WebGLRenderer()
        renderer.setSize(window.innerWidth, window.innerHeight)
        refContainer.current && refContainer.current.appendChild(renderer.domElement)
        let geometry = new THREE.BoxGeometry(1, 1, 1)
        let material = new THREE.MeshBasicMaterial({ color: 'blue' })
        let cube = new THREE.Mesh(geometry, material)
        
        scene.add(cube)
        
        camera.position.z = 5
        let animate = function() {
            requestAnimationFrame(animate)
            renderer.render(scene, camera)
        }
        animate()
    }, [])
    return (
        <div ref={refContainer}></div>
    )
}

export default ThreeJsExample

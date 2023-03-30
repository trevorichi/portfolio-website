import React, { useEffect, useRef } from "react";
import { render } from "react-dom";
import * as THREE from "three";

const RotatingGlobe = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let frameId: number;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(500, 500);
    renderer.setPixelRatio(window.devicePixelRatio);

    const camera = new THREE.PerspectiveCamera(
      40,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000
    );

    let isDragging: boolean = false;
    let rotationSpeedX: number = 0.01;
    let rotationSpeedY: number = 0.01;
    let lastMouseX: number = 0;
    let lastMouseY: number = 0;

    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mousemove", onMouseMove);

    function onMouseDown(event: MouseEvent) {
      isDragging = true;
    }

    function onMouseUp(event: MouseEvent) {
      isDragging = false;
    }

    function onMouseMove(event: MouseEvent) {
      if (isDragging) {
        const mouseX: number = event.clientX;
        const mouseY: number = event.clientY;
        const deltaY: number = mouseY - lastMouseY;
        const deltaX: number = mouseX - lastMouseX;
        lastMouseX = mouseX;
        lastMouseY = mouseY;
        rotationSpeedX += deltaY * 0.000001;
        rotationSpeedX += deltaX * 0.000001;
      }
      globe.rotation.x += rotationSpeedX;
      globe.rotation.y += rotationSpeedY;
    }

    camera.position.z = 7;

    const scene = new THREE.Scene();

    const geometry = new THREE.SphereGeometry(2, 42, 32);
    const material = new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load(
        "https://threejs.org/examples/textures/land_ocean_ice_cloud_2048.jpg"
      ),
    });
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(10, 10, 10);
    scene.add(light);

    animate();

    function animate() {
      globe.rotation.y += 0.002;

      requestAnimationFrame(animate);

      renderer.render(scene, camera);
    }

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default RotatingGlobe;

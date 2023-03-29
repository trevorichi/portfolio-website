import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const RotatingGlobe = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let frameId: number;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    // const camera = new THREE.PerspectiveCamera(
    //   40,
    //   canvas.clientWidth / canvas.clientHeight,
    //   0.1,
    //   1000
    // );

    const camera = new THREE.PerspectiveCamera(
      40,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000
    );

    camera.position.z = 8;

    const scene = new THREE.Scene();

    const geometry = new THREE.SphereGeometry(2, 32, 32);
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
      globe.rotation.y += 0.005;

      renderer.render(scene, camera);

      frameId = requestAnimationFrame(animate);
    }

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default RotatingGlobe;

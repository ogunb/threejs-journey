import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

const group = new THREE.Group();
group.position.y = 0.2;
group.scale.y = 2;
group.rotation.y = 1;
scene.add(group);

const cubeValues = [
  { vector3: [1, 1, 1], material: { color: "hotpink" }, position: [0, 0, 0] },
  { vector3: [1, 1, 1], material: { color: "salmon" }, position: [2, 0, 0] },
  { vector3: [1, 1, 1], material: { color: "orange" }, position: [-2, 0, 0] },
];

for (const { vector3, material, position } of cubeValues) {
  const cube = new THREE.Mesh(
    new THREE.BoxGeometry(...vector3),
    new THREE.MeshBasicMaterial(material)
  );
  cube.position.set(...position);
  group.add(cube);
}

const axesHelper = new THREE.AxesHelper(1);
scene.add(axesHelper);

const sizes = {
  width: 800,
  height: 600,
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// console.log(mesh.position.distanceTo(camera.position));

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "hotpink" });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const width = 800;
const height = 600;
const camera = new THREE.PerspectiveCamera(75, width / height);
camera.position.z = 3;
scene.add(camera);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("canvas"),
});
renderer.setSize(width, height);
renderer.render(scene, camera);

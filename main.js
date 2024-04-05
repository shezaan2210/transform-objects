import * as THREE from 'three'

//canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

// object
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000});
// const mesh = new THREE.Mesh(geometry, material);
// //Position
// mesh.position.set(0.7, 1.2, 1);
// //Scale
// mesh.scale.set(2, 0.5, 0.5);
// //Rotation
// mesh.rotation.reorder('YXZ')
// mesh.rotation.y = Math.PI / 4;
// mesh.rotation.x = Math.PI / 4;
// scene.add(mesh);

const cubes = new THREE.Group();
cubes.scale.y = 2;
cubes.rotation.y = Math.PI / 8
scene.add(cubes);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000})
);
cube1.position.x = 0;
cubes.add(cube1);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00}),
);
cube2.position.x = 2;
cubes.add(cube2);

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00fff0}),
);
cube3.position.x = -2;
cubes.add(cube3);


//Axes helper
const axeshelper = new THREE.AxesHelper(3);
scene.add(axeshelper);

//sizes
const sizes = {
  width: 800,
  height: 600
}

//camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.set(1, 1, 3);
scene.add(camera);

camera.lookAt(cubes.position);

//renderer
const renderer = new THREE.WebGLRenderer({
  canvas
});
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);

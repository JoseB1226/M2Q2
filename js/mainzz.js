const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


camera.position.z = 25;


const CubeGeometry = new THREE.BoxGeometry( 1, 1, 1 );
const CubeMaterial = new THREE.MeshBasicMaterial( { color: "Brown" } );
const cube = new THREE.Mesh( CubeGeometry, CubeMaterial ); scene.add( cube );
scene.add( cube );
cube.position.x = -5;

const CapGeometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const CapMaterial = new THREE.MeshBasicMaterial( {color: "White"} ); 
const capsule = new THREE.Mesh( CapGeometry, CapMaterial ); 
scene.add( capsule);

const coneGeometry = new THREE.ConeGeometry( 5, 10, 26 ); 
const coneMaterial = new THREE.MeshBasicMaterial( {color: "Blue"} );
const cone = new THREE.Mesh(coneGeometry, coneMaterial ); 
scene.add( cone );
cone.position.x = -10;

const Spgeometry = new THREE.SphereGeometry( 1, 12, 6 ); 
const Spmaterial = new THREE.MeshBasicMaterial( { color: "Green" } ); 
const sphere = new THREE.Mesh( Spgeometry, Spmaterial ); 
scene.add( sphere );
sphere.position.x = 5;

const Torgeometry = new THREE.TorusGeometry( 5, 3, 8, 50 ); 
const Tormaterial = new THREE.MeshBasicMaterial( { color: "Yellow" } ); 
const torus = new THREE.Mesh( Torgeometry, Tormaterial ); 
scene.add( torus );
torus.position.x = 15;

function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	capsule.rotation.x += 0.01;
	capsule.rotation.y += 0.01;
	cone.rotation.x += 0.01;
	cone.rotation.y += 0.01;
	sphere.rotation.x += 0.01;
	sphere.rotation.y += 0.01;
	torus.rotation.x += 0.01;
	torus.rotation.y += 0.01;


	renderer.render( scene, camera );
}

animate();
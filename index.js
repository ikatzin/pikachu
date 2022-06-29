function PikaPika() {
  sayHello();
  // alert('Pika Pika, Pikachu!');

}

function sayHello() {
  let audio = new Audio(src="sounds/Pikachu.mp3");
  audio.play();
}
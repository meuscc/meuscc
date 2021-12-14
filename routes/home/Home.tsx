import Script from 'next/script';
import styles from './home.module.scss';

const Home = () => {
  return (
    <>
      <Script
        id="stripe-js"
        src="https://cdn.jsdelivr.net/npm/phaser/dist/phaser.min.js"
        onLoad={() => {
          console.log(Phaser.DOM);
          const config = {
            type: Phaser.AUTO,
            width: 450,
            height: 600,
            backgroundColor: '#5f2a55',
            scene: {
              create,
            },
          };
          const game = new Phaser.Game(config);

          function preload() {
            this.load.image('sky', 'https://pixijs.com/images/favicon.png');
          }

          function create() {
            // Change "Codey's Adventures\n  in Code World" to the name of your game
            this.add.text(50, 100, "Codey's Adventures\n  in Code World", {
              font: '40px Times New Roman',
              fill: '#ffa0d0',
            });

            // Change "by Codecademy" to your name!
            this.add.text(130, 300, 'by Codecademy', {
              font: '20px Times New Roman',
              fill: '#ffa0d0',
            });

            // this.add.image(400, 300, 'sky');

            this.add.image(200, 200, 'sky');
          }
        }}
      />
      <div className={styles.page}>
        <h1 style={{ paddingLeft: 20 }}>网址导航</h1>
        <h1 className="text-red-500 text-3xl font-bold underline">Hello world!</h1>
      </div>
    </>
  );
};

export default Home;

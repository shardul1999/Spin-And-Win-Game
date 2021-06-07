let wins={
	count:12,
	winning:["10","0","1","100","150","0","20","0",
	"100","50","25","500",],
}


let config = {
	type: Phaser.CANVAS,
	height:860,
	width:1580,
	backgroundColor: 0xffcc00,

	scene: {
		preload:preload,
		create: create,
		update: update,
	}
}

let game = new Phaser.Game(config);

function preload(){
	console.log("preload");
	this.load.image('hehe','assets/img1.jpeg');
	this.load.image('hehe1','assets/img3.png');
	this.load.image('hehe2','assets/img_stand.png');
	this.load.image('hehe3','assets/img_wheel1.png');
	console.log(this);
}
function create(){

	let W=game.config.width;
	let H=game.config.height;
	
	console.log("create");
	let background = this.add.sprite(0,0,'hehe');
	let stand = this.add.sprite(0,0,'hehe2');
	this.wheel = this.add.sprite(0,0,'hehe3');

	let pin = this.add.sprite(0,0,'hehe1');
	this.wheel.setPosition(W/2,H/2-30);
	stand.setPosition(W/2,H/2+330);
	pin.setPosition(W/2,H/2-300);
	background.setScale(2);
	pin.setScale(0.35);
	stand.setScale(0.6)
	this.wheel.setScale(0.57);
	//this.wheel.alpha=0.5; // for intensity.

	// event listener for mouse click
	this.input.on("pointerdown",spinwheel,this);

	font1={
		font: "bold 50px roboto",
		align: "center",
		color: "yellow",
	}
	font2={
		font: "bold 20px roboto",
		align: "center",
		color: "yellow",
	}

	// creating text object
	this.gametext=this.add.text(10,10,"Welcome to Spin and Win",font1);
	this.gametext1=this.add.text(1420,10,"By Shardul Singh",font2);
}
function update(){
	console.log("update");
	//this.wheel.angle+=1;
	//this.wheel.scaleX+=0.001;
	//this.wheel.scaleY+=0.001;
	//this.wheel.alpha-=0.0005;
}

function spinwheel()
{
	let rounds=Phaser.Math.Between(2,5)*360;
	let col=Phaser.Math.Between(0,11);
	let degrees=col*30;
	let idx = wins.count-1-degrees/(360/wins.count);
	//this.gametext.setText("You clicked!");
	tween = this.tweens.add({
        targets: this.wheel,
        angle:rounds+degrees ,
		// printa:function(){
		// 	console.log(this.angle);
		// },
		ease: "Cubic.easeOut",
        duration: 6000,
		callbackScope: this,
		//scaleX: 0.5,
		//scaleY: 0.5,
		// props: {
        //     y: { value: 20, duration: 100, ease: 'Bounce.easeInOut', yoyo: true, delay: 100 }
        // },
		onComplete:function(){
			this.gametext.setText("Congrats!! You won: "+wins.winning[col]+"€");
			console.log("jeet gye aap sir"+wins.winning[col]);
		},
    });
}

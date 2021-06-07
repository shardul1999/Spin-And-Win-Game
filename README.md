# Spin-And-Win-Game

### Phaser is a framework that helps us in building a game.
In this game, I have used a concept called tween effect. A Tween allows you to alter one or more properties of a target object over a defined period of time.
This can be used for things such as alpha fading Sprites, scaling them or motion. I have used this mainly to deal with the effects we can apply on the spinning wheel. Parameters in tween class includes targets, motion type, scaling, etc. <br>
Inorder to use the functions of phaser, we are required to include the file phaser.js in the main html file of the application.<br>

Important Points: -
<ul>
<li>We don't need to use the canvas tag in the html file. We can deal with it using the phaser functions in the js file instead.</li>
<li>In Phaser, 
	<ul>
	<li>Images can be added using the sprite() function.</li>
	<li>Their position can be set using setPosition() funciton.</li>
	<li>And scaling can be done using the setScale() function.</li>
	</ul>
</li>
<li>Tween class can be used to deal with the fade, sprite, scale or motion of an object in the canvas.
	<ul><li>In order to use the this(/game) function or properties we are required to specify it in the callbackScope attribute of tween class.</li><ul>
</li></ul></ul>

<li>For putting the text on the phaser canvas: -<p>
	this.gametext=this.add.text(x,y,"...",font class name);</p>
</li>
<li>Usually a game is made up of multiple scenes, but this being a basic one doesn't need more than one scene. "this" keyword is used to point to an object similarly it has been used to access the scene/game object mostly.
</li>	
<li> Scope of Improvement: -
	<ul><li>UI can be improved. E.g More features can be added to it.</li>
	<li>Some unique/funny/interesting type of spinning wheel can be used instead of the one I have used in this. </li>
	<li>Multiple scenes can be added to the game.</li>
	
</li>
	</ul>

/**
 * ALGO: ceci est une classe...
 * Vous verrez ça plus tard en détail avec Rémi, pour l'instant on n'a pas trop besoin de savoir à quoi ça sert.
 */
class Tableau1 extends Phaser.Scene {
    /**
     * Précharge les assets
     */
    preload() {
        //bg 2 (tout au fond et très flou)
        this.load.image('bg2-terrain-2', 'assets/level/background-2/bg2-terrain-2.png');
        this.load.image('bg2Tree1', 'assets/level/background-2/bg2-tree-1.png');
        this.load.image('bg2-tree-2', 'assets/level/background-2/bg2-tree-2.png');
        this.load.image('bg2-tree-3', 'assets/level/background-2/bg2-tree-3.png');
        this.load.image('bg2-terrain-1', 'assets/level/background-2/bg2-terrain-1.png');
        this.load.image('bg2terrain1', 'assets/level/background-2/bg2-terrain-1.png');
        this.load.image('bg2terrain4', 'assets/level/background-2/bg2-terrain-4.png');

        //bg 1 (gris légèrement flou)
        this.load.image('bg1-terrain-3', 'assets/level/background-1/bg-terrain-3.png');
        this.load.image('bg-terrain-1', 'assets/level/background-1/bg-terrain-1.png');
        this.load.image('bgTerrain4', 'assets/level/background-1/bg-terrain-4.png');
        this.load.image('bgTree2', 'assets/level/background-1/bg-tree-2.png');
        this.load.image('bgTree3', 'assets/level/background-1/bg-tree-3.png');
        this.load.image('bgTree1', 'assets/level/background-1/bg-tree-1.png');
        this.load.image('bgTree4', 'assets/level/background-1/bg-tree-1.png');
        this.load.image('bgTree5', 'assets/level/background-1/bg-tree-1.png');
        this.load.image('bgStone4', 'assets/level/background-1/bg-stone-4.png');
        this.load.image('bgGrass5', 'assets/level/background-1/bg-grass-5.png');
        this.load.image('bgGrass6', 'assets/level/background-1/bg-grass-5.png');
        this.load.image('bgBridge', 'assets/level/background-1/bg-wooden-bridge.png');
        //zombies
        this.load.image('zombie1', 'assets/Characters/Zombies/z1.png');
        this.load.image('zombie2', 'assets/Characters/Zombies/z2.png');
        //ground (premier plan noir)
        this.load.image('gMid', 'assets/level/ground/g-mid.png');
        this.load.image('gRight', 'assets/level/ground/g-right.png');
        this.load.image('gTree1', 'assets/level/ground/g-tree-1.png');
        this.load.image('gTree2', 'assets/level/ground/g-tree-2.png');
        this.load.image('gTree3', 'assets/level/ground/g-tree-3.png');
        this.load.image('g-mushroom1', 'assets/level/ground/g-mushroom1.png');
        this.load.image('gLeft', 'assets/level/ground/g-left.png');
        this.load.image('gStone1', 'assets/level/ground/g-stone-1.png');
        this.load.image('g-stone-4', 'assets/level/ground/g-stone-4.png');
        this.load.image('g-stone-5', 'assets/level/ground/g-stone-5.png');
        this.load.image('fellenTree1', 'assets/level/ground/g-fellen-tree-1.png');
        this.load.image('gSpike1', 'assets/level/ground/g-spike-1.png');
        this.load.image('gWater', 'assets/level/ground/g-water.png');
        this.load.image('gBridge', 'assets/level/ground/g-wooden-bridge.png');
        this.load.image('gBox2', 'assets/level/ground/g-box-2.png');
        this.load.image('gGrass5', 'assets/level/ground/g-grass-5.png');
        this.load.image('gGrass1', 'assets/level/ground/g-grass-1.png');
        this.load.image('gGrass3', 'assets/level/ground/g-grass-3.png');
        this.load.image('gGrass2', 'assets/level/ground/g-grass-2.png');
        this.load.image('gGrass6', 'assets/level/ground/g-grass-3.png');
        this.load.image('gGrass7', 'assets/level/ground/g-grass-1.png');
        //zombies
        this.load.image('zombie3', 'assets/Characters/Zombies/z3.png');

        //Characters_Boy4
        for (let id = 1; id <= 10; id++) {
            this.load.image('layer4' + id, 'assets/Characters/boy/boy_4/PNG/idle2/Layer-' + id + '.png');
        }
        //Characters_Boy1
        for (let id1 = 1; id1 <= 10; id1++) {
            this.load.image('layer1' + id1, 'assets/Characters/boy/boy_1/PNG/idle2/Layer-' + id1 + '.png');
        }
        //Characters_Boy3
        for (let id2 = 1; id2 <= 10; id2++) {
            this.load.image('layer3' + id2, 'assets/Characters/boy/boy_3/PNG/idle2/Layer-' + id2 + '.png');
        }
        //Characters_Boy5
        for (let id3 = 1; id3 <= 10; id3++) {
            this.load.image('layer5' + id3, 'assets/Characters/boy/boy_5/PNG/idle2/Layer-' + id3 + '.png');
        }
        //Ennemy_2
        for (let en2id = 1; en2id <= 10; en2id++) {
            this.load.image('enemy2idle' + en2id, 'assets/Characters/enemy 2/PNG/idle/Layer-' + en2id + '.png');

            //Pièges
        for (let t1 = 1; t1 <= 10; t1++) {
            this.load.image('trap1op' + t1, 'assets/Characters/trap 1/PNG/open/Layer-' + t1 + '.png');

        }

            //au lieu d'écrire 5 lignes quasi identiques, on charge l'herbe avec une boucle
            // ALGO : ceci est une boucle
            for (let i = 1; i <= 5; i++) {
                this.load.image('g-grass-' + i, 'assets/level/ground/g-grass-' + i + '.png');
            }

            //filtre film TODO élève : faire une boucle à la place des 3 lignes qui suivent
            for (let f = 1; f <= 3; f++) {
                this.load.image('filterFilm' + f, 'assets/level/filters/film/frame-' + f + '.png');
            }
            //this.load.image('filterFilm1', 'assets/level/filters/film/frame-1.png');
            //this.load.image('filterFilm2', 'assets/level/filters/film/frame-2.png');
            //this.load.image('filterFilm3', 'assets/level/filters/film/frame-3.png');

            //filtre bloody
            for (let b = 1; b <= 3; b++) {
                this.load.image('filterBloody' + b, 'assets/level/filters/bloody/frame' + b + '.png');
            }

            //texture au fond  TODO élève : faire une boucle pour charger les 3 images et démontrer par la même que vous savez aller au plus simple
            for (let bg = 1; bg <= 3; bg++) {
                this.load.image('bg-animation-' + bg, 'assets/level/background-2/bg-animation/bg-animation-' + bg + '.png');
            }
            /**
             * Crée la scène
             * TODO élèves : reproduire à l'identique assets/level/00-preview-example/sample1.jpg
             * TODO élèves : plus tard, continuez le décor vers la droite en vous servant des assets mis à votre disposition
             */

        }
    }

    create() {

        /**
         * Fond très clair avec une trame
         * @type {Phaser.GameObjects.Sprite}
         */
        this.bgAnimationA = this.add.sprite(0, 0, 'bg-animation-1').setOrigin(0, 0);
        this.anims.create({
            key: 'bgAnimationA',
            frames: [
                {key: 'bg-animation-1'},
                {key: 'bg-animation-2'},
                {key: 'bg-animation-3'},
            ],
            frameRate: 16,
            repeat: -1
        });
        //this.filterBloody.play('bgAnimationA');

        //--------------background 2 (tout au fond et flou)--------------------

        /**
         * contient tous les éléments du background 2 (gris clair très flou)
         * @type {Phaser.GameObjects.Container}
         * @see https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Container.html
         */
        this.bg2Container = this.add.container(0, 0);
        /**
         * Terrain dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Terrain2 = this.add.image(-300, 100, 'bg2-terrain-2').setOrigin(0, 0);
        this.bg2Container.add(bg2Terrain2);
        let bg2terrain1 = this.add.image(900, 120, 'bg2terrain1').setOrigin(0, 0);
        this.bg2Container.add(bg2terrain1);
        let bg2terrain4 = this.add.image(450, 120, 'bg2terrain4').setOrigin(0, 0);
        this.bg2Container.add(bg2terrain4);
        /**
         * Arbre dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Tree2 = this.add.image(250, -50, 'bg2-tree-2').setOrigin(0, 0);
        this.bg2Container.add(bg2Tree2);
        bg2Tree2.angle = -5; //pencher l'arbre de -5 degrès
        let bg2Tree3 = this.add.image(930, -100, 'bg2-tree-3').setOrigin(0, 0);
        this.bg2Container.add(bg2Tree3);
        bg2Tree3.angle = -5;
        let bg2Tree1 = this.add.image(475, -150, 'bg2-tree-1').setOrigin(0, 0);
        this.bg2Container.add(bg2Tree1);


        //--------------background 1 (gris) --------------------

        /**
         * contient tous les éléments du background 1 (gris)
         * @type {Phaser.GameObjects.Container}
         */
        this.bg1Container = this.add.container(0, 0);
        /**
         * Terrain
         * @type {Phaser.GameObjects.Image}
         */
        let bg1Terrain3 = this.add.image(-400, 200, 'bg1-terrain-3').setOrigin(0, 0);
        this.bg1Container.add(bg1Terrain3);
        let bgTerrain1 = this.add.image(300, 250, 'bg-terrain-1').setOrigin(0, 0);
        this.bg1Container.add(bgTerrain1);
        let bgTerrain4 = this.add.image(900, 200, 'bgTerrain4').setOrigin(0, 0);
        this.bg1Container.add(bgTerrain4);
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */
        let bgTree3 = this.add.image(75, -150, 'bgTree3').setOrigin(0, 0);
        this.bg1Container.add(bgTree3);
        let bgTree1 = this.add.image(-48, -50, 'bgTree1').setOrigin(0, 0);
        this.bg1Container.add(bgTree1);
        let bgTree2 = this.add.image(580, -40, 'bgTree2').setOrigin(0, 0);
        this.bg1Container.add(bgTree2);
        let bgTree4 = this.add.image(1125, -100, 'bgTree4').setOrigin(0, 0);
        bgTree4.flipX = true
        this.bg1Container.add(bgTree4);
        let bgTree5 = this.add.image(1250, -100, 'bgTree5').setOrigin(0, 0);
        this.bg1Container.add(bgTree5);
        bgTree5.flipX = true
        /**
         * Pierres
         * @type {Phaser.GameObjects.Image}
         */
        let bgStone4 = this.add.image(575, 450, 'bgStone4').setOrigin(0, 0);
        this.bg1Container.add(bgStone4);
        /**
         * Herbe
         * @type {Phaser.GameObjects.Image}
         */
        let bgGrass5 = this.add.image(500, 430, 'bgGrass5').setOrigin(0, 0);
        this.bg1Container.add(bgGrass5);
        let bgGrass6 = this.add.image(400, 430, 'bgGrass6').setOrigin(0, 0);
        this.bg1Container.add(bgGrass6);
        /**
         * Pont
         * @type {Phaser.GameObjects.Image}
         */
        let bgBridge = this.add.image(750, 240, 'bgBridge').setOrigin(0, 0);
        this.bg1Container.add(bgBridge);
        bgBridge.angle = -2;
        /**
         * Zombie1
         * @type {Phaser.GameObjects.Image}
         */
        let zombie1 = this.add.image(900, 125, 'zombie1').setOrigin(0, 0);
        this.bg1Container.add(zombie1);
        let zombie2 = this.add.image(350, 115, 'zombie2').setOrigin(0, 0);
        this.bg1Container.add(zombie2);
        zombie2.angle = 15
        //-------------ground (premier plan noir)---------------------------

        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        this.groundContainer = this.add.container(0, 0);
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */
        let tree1 = this.add.image(880, 450, 'gTree1').setOrigin(0, 1);
        //tree1.setTintFill(0xFF0000); // pratique pour dbugger
        this.groundContainer.add(tree1);
        tree1.angle = -10
        tree1.flipX = true
        let tree2 = this.add.image(0, 450, 'gTree2').setOrigin(0, 1);
        //tree2.setTintFill(0xFF0000); // pratique pour dbugger
        this.groundContainer.add(tree2);
        tree2.flipX = true
        let tree3 = this.add.image(220, 375, 'gTree1').setOrigin(0, 1);
        //tree3.setTintFill(0xFF0000); // pratique pour dbugger
        this.groundContainer.add(tree3);
        let tree4 = this.add.image(1100, 450, 'gTree1').setOrigin(0, 1);
        //tree1.setTintFill(0xFF0000); // pratique pour dbugger
        this.groundContainer.add(tree4);
        let fellenTree1 = this.add.image(1500, 385, 'fellenTree1').setOrigin(0, 1);
        //  fellenTree1etTintFill(0xFF0000); // pratique pour dbugger
        this.groundContainer.add(fellenTree1);
        fellenTree1.angle = 3
        /**
         * Pierres
         * @type {Phaser.GameObjects.Image}
         */
        let gStone1 = this.add.image(300, 355, 'gStone1').setOrigin(0, 1);
        //gstone4.setTintFill(0xFF0000); // pratique pour dbugger
        this.groundContainer.add(gStone1);
        let gstone4 = this.add.image(820, 385, 'g-stone-4').setOrigin(0, 1);
        //gstone4.setTintFill(0xFF0000); // pratique pour dbugger
        this.groundContainer.add(gstone4);
        let gstone5 = this.add.image(1115, 385, 'g-stone-5').setOrigin(0, 1);
        //gstone1.setTintFill(0xFF0000); // pratique pour dbugger
        this.groundContainer.add(gstone5);
        /**
         * Champignon
         * @type {Phaser.GameObjects.Image}
         */
        let mushroom1 = this.add.image(120, 360, 'g-mushroom1').setOrigin(0, 1);
        //mushroom1.setTintFill(0xFF0000); // pratique pour dbugger
        this.groundContainer.add(mushroom1);
        mushroom1.angle = 10;
        let mushroom2 = this.add.image(1350, 400, 'g-mushroom1').setOrigin(0, 1);
        //mushroom1.setTintFill(0xFF0000); // pratique pour dbugger
        this.groundContainer.add(mushroom2);
        mushroom1.angle = -5;
        /**
         * Terrain 1
         * @type {Phaser.GameObjects.Image}
         */
            //ici on va calculer les positions
        let gMid1 = this.add.image(0, 350, 'gMid').setOrigin(0, 0);
        this.groundContainer.add(gMid1);
        /**
         * Terrain 3
         * @type {Phaser.GameObjects.Image}
         */
        let gMid3 = this.add.image(gMid1.x + gMid1.width, 350, 'gRight').setOrigin(0, 0);
        this.groundContainer.add(gMid3);
        /**
         * Terrain 4
         *   * @type {Phaser.GameObjects.Image}
         */
        let gMid4 = this.add.image(900, 375, 'gMid').setOrigin(0, 0);
        this.groundContainer.add(gMid4);
        let gLeft = this.add.image(800, 375, 'gLeft').setOrigin(0, 0);
        this.groundContainer.add(gLeft);
        let gMid5 = this.add.image(1100, 375, 'gMid').setOrigin(0, 0);
        this.groundContainer.add(gMid5);
        let gMid6 = this.add.image(1200, 375, 'gMid').setOrigin(0, 0);
        this.groundContainer.add(gMid6);
        let gMid7 = this.add.image(gMid6.x + gMid6.width, 375, 'gRight').setOrigin(0, 0);
        this.groundContainer.add(gMid7);
        let gMid8 = this.add.image(1950, 375, 'gMid').setOrigin(0, 0);
        this.groundContainer.add(gMid8);
        let gMid9 = this.add.image(1900, 375, 'gLeft').setOrigin(0, 0);
        this.groundContainer.add(gMid9);
        /**
         * Eau
         *   * @type {Phaser.GameObjects.Image}
         */
        let gWater = this.add.image(gMid1.x + gMid1.width + 200, 650, 'gWater').setOrigin(0, 1);
        this.groundContainer.add(gWater);
        let gWater2 = this.add.image(gMid1.x + gMid1.width + 230, 650, 'gWater').setOrigin(0, 1);
        this.groundContainer.add(gWater2);
        //(gMid3.x+gMid3.width,375, 'g-water')
        /**
         * De l'herbe en textures qui se répète
         * @type {Phaser.GameObjects.TileSprite}
         */
        let grass = this.add.tileSprite(0, 370, gMid3.x + gMid3.width - 40, 50, 'g-grass-1').setOrigin(0, 1)
        this.groundContainer.add(grass);
        /**
         * encore de l'herbe
         * @type {Phaser.GameObjects.TileSprite}
         */
        let grass2 = this.add.tileSprite(0, 370, gMid3.x + gMid3.width - 40, 50, 'g-grass-3').setOrigin(0, 1)
        this.groundContainer.add(grass2);

        /**
         * herbe pointue
         * @type {Phaser.GameObjects.TileSprite}
         */
        let gSpike1 = this.add.image(1750, 475, 'gSpike1').setOrigin(0, 0);
        this.groundContainer.add(gSpike1);
        let gSpike2 = this.add.image(1600, 475, 'gSpike1').setOrigin(0, 0);
        this.groundContainer.add(gSpike2);
        let gSpike3 = this.add.image(375, 450, 'gSpike1').setOrigin(0, 0);
        this.groundContainer.add(gSpike3);
        let gSpike4 = this.add.image(550, 450, 'gSpike1').setOrigin(0, 0);
        this.groundContainer.add(gSpike4);
        let gSpike5 = this.add.image(700, 450, 'gSpike1').setOrigin(0, 0);
        this.groundContainer.add(gSpike5);
        let gGrass1 = this.add.image(1300, 340, 'gGrass1').setOrigin(0, 0);
        this.groundContainer.add(gGrass1);
        let gGrass3 = this.add.image(1470, 340, 'gGrass3').setOrigin(0, 0);
        this.groundContainer.add(gGrass3);
        let gGrass2 = this.add.image(1950, 340, 'gGrass2').setOrigin(0, 0);
        this.groundContainer.add(gGrass2);
        let gGrass6 = this.add.image(1085, 330, 'gGrass6').setOrigin(0, 0);
        this.groundContainer.add(gGrass6);
        let gGrass7 = this.add.image(1060, 345, 'gGrass7').setOrigin(0, 0);
        this.groundContainer.add(gGrass7);
        /**
         * Pont
         * @type {Phaser.GameObjects.Image}
         */
        let gBridge = this.add.image(350, 370, 'gBridge').setOrigin(0, 1)
        this.groundContainer.add(gBridge);
        gBridge.angle = -2
        /**
         * Boîte
         * @type {Phaser.GameObjects.Image}
         */
        let gBox2 = this.add.image(455, 230, 'gBox2').setOrigin(0, 0);
        this.groundContainer.add(gBox2);
        gBox2.angle = 5
        /**
         * filtre type film au premier plan
         * @type {Phaser.GameObjects.Sprite}
         */
        this.filterFilm = this.add.sprite(0, 0, 'filterFilm1').setOrigin(0, 0);
        //animation de 3 images
        this.anims.create({
            key: 'film',
            frames: [
                {key: 'filterFilm1'},
                {key: 'filterFilm2'},
                {key: 'filterFilm3'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.filterFilm.play('film');
        this.filterFilm.setVisible(false)
        /**
         * filtre type bloody au premier plan
         * @type {Phaser.GameObjects.Sprite}
         */
        this.filterBloody = this.add.sprite(0, 0, 'filterBloody1').setOrigin(0, 0);
        //animation de 3 images
        this.anims.create({
            key: 'bloody',
            frames: [
                {key: 'filterBloody1'},
                {key: 'filterBloody2'},
                {key: 'filterBloody3'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.filterBloody.play('bloody');
        /**
         * Zombie1
         * @type {Phaser.GameObjects.Image}
         */
        let zombie3 = this.add.image(1700, 400, 'zombie3').setOrigin(0, 0);
        this.groundContainer.add(zombie3);
        /**
         * AnimationBoy4Idle2
         * @type  {Phaser.GameObjects.TileSprite}
         */
        this.idle2_4 = this.add.sprite(1600, -35, 'layer4').setOrigin(0, 0)
        console.log(frames)
        this.anims.create({
            key: 'layer4',
            frames: this.getFrames("layer4", 10),
            frameRate: 12,
            repeat: -1
        });
        this.idle2_4.play('layer4');
        /**
         * AnimationBoy1Idle2
         * @type  {Phaser.GameObjects.TileSprite}
         */
        this.idle2_1 = this.add.sprite(430, -50, 'layer1').setOrigin(0, 0)
        console.log(frames)
        this.anims.create({
            key: 'layer1',
            frames: this.getFrames("layer1", 10),
            frameRate: 12,
            repeat: -1
        });
        this.idle2_1.play('layer1');
        this.idle2_1.setFlipX(180)
        /**
         * AnimationBoy3Idle2
         * @type  {Phaser.GameObjects.TileSprite}
         */
        this.idle2_3 = this.add.sprite(-35, -20, 'layer3').setOrigin(0, 0)
        console.log(frames)
        this.anims.create({
            key: 'layer3',
            frames: this.getFrames("layer3", 10),
            frameRate: 12,
            repeat: -1
        });
        this.idle2_3.play('layer3');
        /**
         * AnimationBoy5Idle2
         * @type  {Phaser.GameObjects.TileSprite}
         */
        this.idle2_5 = this.add.sprite(1000, 10, 'layer5').setOrigin(0, 0)
        console.log(frames)
        this.anims.create({
            key: 'layer5',
            frames: this.getFrames("layer5", 10),
            frameRate: 12,
            repeat: -1
        });
        this.idle2_5.play('layer5');
        this.idle2_5.setFlipX(180)
        /**
         * AnimationEnemy2Idle
         * @type  {Phaser.GameObjects.TileSprite}
         */
        this.enemyIdle2 = this.add.sprite(1000, 10, 'enemy2idle').setOrigin(0, 0)
        console.log(frames)
        this.anims.create({
            key: 'enemy2idle',
            frames: this.getFrames("enemy2idle", 6),
            frameRate: 12,
            repeat: -1
        });
        this.enemyIdle2.play('enemy2idle');
        this.enemyIdle2.setScale(0.5)

        let enemyIdle2 = this.enemyIdle2
        let tween = this.tweens.add({
            targets: enemyIdle2,
            x: 600,
            duration: 3000,
            ease: 'Power2',
            yoyo : true,
            loop: 10,
            delay : 2000,
        });
        ///**
         //* AnimationTrap1open
         //* @type  {Phaser.GameObjects.TileSprite}
         //*/
        //this.trap1_open = this.add.sprite(1300, 10, 'trap1op').setOrigin(0, 0)
        //console.log(frames)
        //this.anims.create({
            //key: 'trap1op',
            //: this.getFrames("trap1op", 10),
            //frameRate: 12,
            //repeat: -1
        //});
        //this.trap1_open.play('trap1op');


        //TODO élève faire une animation du même genre que filter mais pour bgAnimationA

        //gestion du parallaxe
        /**
         * Vitesse de déplacement du décor
         * @type {number}
         */
        this.speed = 0;
        //initialise ce qui se passe avec le clavier
        this.initKeyboard();
        // Définit l'espace de déplacement de la caméra
        this.cameras.main.setBounds(0, 0, 2000, 540);
        //définit à quelles vitesse se déplacent nos différents plans
        // this.bgAnimationA.scrollFactorX = 0;
        this.filterBloody.scrollFactorX = 0;
        this.bg2Container.scrollFactorX = 0.2;
        this.bg1Container.scrollFactorX = 0.4;
        this.groundContainer.scrollFactorX = 1;
    }

    //fonction pour activer notre animation
    getFrames(prefix, length) {
        let frames = [];
        for (let i = 1; i <= length; i++) {
            frames.push({key: prefix + i});
        }
        return frames;
    }

    /**
     * Définit ce qui se passe quand on appuie ou relache une touche du clavier
     * ALGO : ceci est une fonction ou méthode
     */
    initKeyboard() {
        let me = this;
        this.input.keyboard.on('keydown', function (kevent) {
            switch (kevent.keyCode) {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                    me.speed = 1;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed = -1;
                    break;
            }
        });
        this.input.keyboard.on('keyup', function (kevent) {
            switch (kevent.keyCode) {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed = 0;
                    break;
            }
        });
    }

    /**
     * Cette fonction s'exécute en boucle (à peu près 60 fois par secondes)
     */
    update() {
        //déplacement de la caméra
        this.cameras.main.scrollX += this.speed * 8; // on aurait pu écrire : this.cameras.main.scrollX= this.cameras.main.scrollX + this.speed;

        //petit effet de vibrance sur le filtre film au tout premier plan
        this.filterFilm.setAlpha(Phaser.Math.Between(95, 100) / 100)
    }
}




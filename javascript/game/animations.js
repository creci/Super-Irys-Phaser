function createAnimations() {

    //> Irys animations
    this.anims.create({
        key: 'idle',
        frames: [{ key: 'irys', frame: 0 }]
    });
    this.anims.create({
        key: 'run',
        frames: this.anims.generateFrameNumbers('irys', { start: 3, end: 1 }),
        frameRate: 12,
        repeat: -1
    });
    this.anims.create({
        key: 'hurt',
        frames: [{ key: 'irys', frame: 4 }]
    });
    this.anims.create({
        key: 'jump',
        frames: [{ key: 'irys', frame: 5 }]
    });

    //> Grown Irys animations
    this.anims.create({
        key: 'grown-irys-idle',
        frames: [{ key: 'irys-grown', frame: 0 }]
    });
    this.anims.create({
        key: 'grown-irys-run',
        frames: this.anims.generateFrameNumbers('irys-grown', { start: 3, end: 1 }),
        frameRate: 12,
        repeat: -1
    });
    this.anims.create({
        key: 'grown-irys-crouch',
        frames: [{ key: 'irys-grown', frame: 4 }]
    });
    this.anims.create({
        key: 'grown-irys-jump',
        frames: [{ key: 'irys-grown', frame: 5 }]
    });

    //> Fire Irys animations
    this.anims.create({
        key: 'fire-irys-idle',
        frames: [{ key: 'irys-fire', frame: 0 }]
    });
    this.anims.create({
        key: 'fire-irys-run',
        frames: this.anims.generateFrameNumbers('irys-fire', { start: 3, end: 1 }),
        frameRate: 12,
        repeat: -1
    });
    this.anims.create({
        key: 'fire-irys-crouch',
        frames: [{ key: 'irys-fire', frame: 4 }]
    });
    this.anims.create({
        key: 'fire-irys-jump',
        frames: [{ key: 'irys-fire', frame: 5 }]
    });
    this.anims.create({
        key: 'fire-irys-throw',
        frames: [{ key: 'irys-fire', frame: 6 }]
    });

    //> Goomba animations
    this.anims.create({
        key: 'goomba-idle',
        frames: [{ key: 'goomba', frame: 1 }]
    });
    this.anims.create({
        key: 'goomba-walk',
        frames: this.anims.generateFrameNumbers('goomba', { start: 0, end: 1 }),
        frameRate: 8,
        repeat: -1
    });
    this.anims.create({
        key: 'goomba-hurt',
        frames: [{ key: 'goomba', frame: 2 }]
    });
    
    //> koopas animations
    this.anims.create({
        key: 'koopa-idle',
        frames: [{ key: 'koopa', frame: 1 }]
    });
    this.anims.create({
        key: 'koopa-walk',
        frames: this.anims.generateFrameNumbers('koopa', { start: 0, end: 1 }),
        frameRate: 8,
        repeat: -1
    });
    this.anims.create({
        key: 'koopa-hurt',
        frames: [{ key: 'koopa', frame: 0 }]
    });
    this.anims.create({
        key: 'koopa-shell',
        frames: [{ key: 'koopa', frame: 1 }]
    });

    //> Coins
    this.anims.create({
        key: 'coin-default',
        frames: this.anims.generateFrameNumbers('coin', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    //> Ground coin
    this.anims.create({
        key: 'ground-coin-default',
        frames: this.anims.generateFrameNumbers('ground-coin', { start: 2, end: 0 }),
        frameRate: 5,
        repeat: -1,
        repeatDelay: 5
    });

    //> Mistery blocks
    this.anims.create({
        key: 'mistery-block-default',
        frames: this.anims.generateFrameNumbers('mistery-block', { start: 2, end: 0 }),
        frameRate: 5,
        repeat: -1,
        repeatDelay: 5
    });

    //> Custom blocks
    this.anims.create({
        key: 'custom-block-default',
        frames: this.anims.generateFrameNumbers('custom-block', { start: 2, end: 0 }),
        frameRate: 5,
        repeat: -1,
        repeatDelay: 5
    });

    //> Brick debris
    this.anims.create({
        key: 'brick-debris-default',
        frames: this.anims.generateFrameNumbers('brick-debris', { start: 0, end: 3 }),
        frameRate: 4,
        repeat: -1,
    });

    //> Fireflower
    this.anims.create({
        key: 'fire-flower-default',
        frames: this.anims.generateFrameNumbers('fire-flower', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1,
    });

    //> Fireball
    this.anims.create({
        key: 'fireball-left-down',
        frames: [{ key: 'fireball', frame: 0 }]
    });
    this.anims.create({
        key: 'fireball-left-up',
        frames: [{ key: 'fireball', frame: 1 }]
    });
    this.anims.create({
        key: 'fireball-right-down',
        frames: [{ key: 'fireball', frame: 2 }]
    });
    this.anims.create({
        key: 'fireball-right-up',
        frames: [{ key: 'fireball', frame: 3 }]
    });

    //> Fireball explosion
    this.anims.create({
        key: 'fireball-explosion-1',
        frames: [{ key: 'fireball-explosion', frame: 0 }]
    });
    this.anims.create({
        key: 'fireball-explosion-2',
        frames: [{ key: 'fireball-explosion', frame: 1 }]
    });
    this.anims.create({
        key: 'fireball-explosion-3',
        frames: [{ key: 'fireball-explosion', frame: 2 }]
    });

    //> NPC 
    this.anims.create({
        key: 'npc-default',
        frames: this.anims.generateFrameNumbers('npc', { start: 0, end: 1 }),
        frameRate: 2,
        repeat: -1,
        repeatDelay: 10
    });
}

function getRandomValue(min, max) {
  const randomValue = Math.floor(Math.random() * (max - min) + min);
  // console.log('min : ,', min, ' max : ', max, 'randomValue : ',randomValue);
  return randomValue;
}

const app =Vue.createApp({
  data() {
    return {
      currentTurn: 1,

      playerHealth: 100,
      // playerAttackPower: 20,
      playerMinDamage: 5,
      playerMaxDamage: 12,
      specialBonus: 2,
      // playerHealPower: 10,
      playerMinHeal: 10,
      playerMaxHeal: 20,

      monsterHealth: 100,
      // monsterAttackPower: 10,
      monsterMinDamage: 8,
      monsterMaxDamage: 15,

      logMsg: '',
      logArr: [],
      resultMsg: '',
      resultVisible: false
    }
  },
  methods: {
    turnStart(behavior) {
      this.logInit(behavior);
    },
    turnEnd() {
      this.logArr.push(this.logMsg);
      this.logMsg = '';

      this.currentTurn++;
    },
    attack() {
      this.turnStart('Attack');

      // this.playerHealth -= this.monsterAttackPower;
      // this.monsterHealth -= this.playerAttackPower;
      // attackMonsterRandom();
      // attackPlayerRandom();

      const playerRandomDamage = getRandomValue(this.playerMinDamage, this.playerMaxDamage);
      this.monsterHealth -= playerRandomDamage;

      this.logMsgSetting('player', 'attack', playerRandomDamage);
      
      this.attackPlayerRandom();
    },
    attackPlayerRandom() {
      const monsterRandomDamage = getRandomValue(this.monsterMinDamage, this.monsterMaxDamage);
      this.playerHealth -= monsterRandomDamage;

      this.logMsgSetting('monster', 'attack', monsterRandomDamage);

      this.turnEnd();
    },
    specialAttack() {
      this.turnStart('Special attack');

      const playerSpecialRandomDamage = getRandomValue(this.playerMinDamage*this.specialBonus, this.playerMaxDamage*this.specialBonus);
      this.monsterHealth -= playerSpecialRandomDamage;

      this.logMsgSetting('player', 'special attack', playerSpecialRandomDamage);

      this.attackPlayerRandom();
    },
    heal() {
      this.turnStart('Heal');

      const healValue = getRandomValue(this.playerMinHeal, this.playerMaxHeal);
      this.playerHealth += healValue;

      this.logMsgSetting('player', 'heal', healValue);

      this.turnEnd();
    },
    surrender() {
      this.turnStart('Surrender');

      this.logMsgSetting('player', 'surrender', null);

      this.turnEnd();

      this.lose();
    },
    draw() {
      this.resultVisible = true;
      this.resultMsg = 'Draw!' + '(Turn : ' + (this.currentTurn-1) + ' )';
    },
    lose() {
      this.resultVisible = true;
      this.resultMsg = 'You Lost!'+ '(Turn : ' + (this.currentTurn-1) + ' )';
    },
    win() {
      this.resultVisible = true;
      this.resultMsg = 'You Won!'+ '(Turn : ' + (this.currentTurn-1) + ' )';
    },

    logInit(behavior) {
      this.logMsg = `[Turn ${this.currentTurn}] ${behavior} <br />`
    },
    logMsgSetting(actionBy, actionType, actionValue) {
      let actionTg = actionBy === 'player' ? 'monster' : 'player';
      let logActionBy = actionBy === 'player' ? 'log--player' : 'log--monster';
      let logActionTg = actionBy === 'player' ? 'log--monster' : 'log--player';
      
      this.logMsg += `<span class="${logActionBy}">${actionBy}</span>`

      switch(actionType) {
        case 'attack' :
          this.logMsg += `
            <span>
              attack <span class="${logActionTg}">${actionTg}</span> by <span class="log--damage">${actionValue}</span> damage
            </span>
          `
          break;
        case 'special attack' :
          this.logMsg += `
            <span>
              special attack <span class="${logActionTg}">${actionTg}</span> by <span class="log--damage">${actionValue}</span> damage
            </span>
          `
          break;
        case 'heal' : 
          this.logMsg += `
            <span>
              heals himself for <span class="log--heal">${actionValue}</span>
            </span>
          `
          break;
        case 'surrender' :
          this.logMsg += `
            <span>
              surrender
            </span>
          `
          break;
        default :
          this.logMsg += ``
          break;
      }

      this.logMsg += `<br />`
    },
    retry() {
      this.currentTurn = 1;

      this.playerHealth = 100;
      this.monsterHealth = 100;

      this.logMsg = '';
      this.logArr = [];

      this.resultMsg = '';
      this.resultVisible = false;
    }
  },
  computed: {
    updatePlayerHealth() {
      return this.playerHealth + '%';
    },
    updateMonsterHealth() {
      return this.monsterHealth + '%';
    },
    specialAttackPossible() {
      return this.currentTurn % 3 !== 0;
    }
  },
  watch: {
    playerHealth(value) {
      // console.log("playerHealth : ", value);
      if(value <= 0) {
        this.playerHealth = 0;

        if(this.monsterHealth <=0) {
          this.draw();
        }else {
          this.lose();
        }
      }else if(value > 100) {
        this.playerHealth = 100;
      }
    },
    monsterHealth(value) {
      // console.log("monsterHealth : ", value);
      if(value <= 0) {
        this.monsterHealth = 0;

        if(this.playerHealth <=0) {
          this.draw();
        }else {
          this.win();
        }
      }else if(value > 100) {
        this.monsterHealth = 100;
      }
    }
  }
});

app.mount('#game');
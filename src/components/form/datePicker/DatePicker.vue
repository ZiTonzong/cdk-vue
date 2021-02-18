<template>
  <div class="c-date-picker">
    <div class="input-wrapper">
      <input type="text" v-model.trim="value" @click="pickerVisible = true" @focus="inputFocus" ref="input" />
      <label class="label" v-if="!value">请选择日期</label>
      <c-icon name="datepicker" class="icon" style="pointer-events:none;"></c-icon>
      <c-icon name="error" class="icon clear" v-if="value" @click="value = ''" style="color:rgba(0,0,0,0.35);"></c-icon>
    </div>
    <c-spread :visible="pickerVisible" :duration="500" class="spread">
      <div class="picker" ref="picker">
        <input type="text" :value="value" @change="change" @focus="pickerHolderVisible = false" @blur="pickerHolderVisible = true" />
        <label class="label" v-if="!value && pickerHolderVisible">
          请选择日期
        </label>
        <div class="action-bar">
          <div class="icons">
            <c-icon
              name="next-double"
              style="transform:rotateZ(180deg);"
              class="icon icon-next-double"
              @click.native="handleDoubleNext(-1)"
            ></c-icon>
            <c-icon
              name="next"
              style="transform:rotateZ(180deg);"
              class="icon"
              @click.native="changeMonth(-1)"
              v-show="dateListVisible"
            ></c-icon>
          </div>
          <div class="time">
            <span class="year" @click="showList('yearListVisible')" v-show="dateListVisible || monthListVisible">{{ year }}年</span>
            <span class="month" @click="showList('monthListVisible')" v-show="dateListVisible">{{ month }}月</span>
            <span class="year-area" @click="showList('centuryListVisible')" v-show="yearListVisible">
              {{ yearArray[1] + '-' + yearArray[10] }}
            </span>
            <span class="century" v-if="centuryListVisible">
              {{ this.century * 100 + '-' + (this.century * 100 + 99) }}
            </span>
          </div>
          <div class="icons">
            <c-icon name="next" class="icon" @click.native="changeMonth(1)" v-show="dateListVisible"></c-icon>
            <c-icon name="next-double" class="icon" @click.native="handleDoubleNext(1)"></c-icon>
          </div>
        </div>
        <div class="picker-body" v-show="dateListVisible">
          <div class="days">
            <span>一</span>
            <span>二</span>
            <span>三</span>
            <span>四</span>
            <span>五</span>
            <span>六</span>
            <span>日</span>
          </div>
          <div class="dates">
            <div class="row">
              <span v-for="n in dateArray.slice(0, 7)" :key="n" :class="getDateClassObj(n, 1)" @click="changeDate(n, 'first')">
                {{ n }}
              </span>
            </div>
            <div class="row">
              <span v-for="n in dateArray.slice(7, 14)" :key="n" :class="getDateClassObj(n, 2)" @click="changeDate(n)">{{ n }}</span>
            </div>
            <div class="row">
              <span v-for="n in dateArray.slice(14, 21)" :key="n" :class="getDateClassObj(n, 3)" @click="changeDate(n)">{{ n }}</span>
            </div>
            <div class="row">
              <span v-for="n in dateArray.slice(21, 28)" :key="n" :class="getDateClassObj(n, 4)" @click="changeDate(n)">{{ n }}</span>
            </div>
            <div class="row">
              <span v-for="n in dateArray.slice(28, 35)" :key="n" :class="getDateClassObj(n, 5)" @click="changeDate(n, 'last')">
                {{ n }}
              </span>
            </div>
            <div class="row">
              <span v-for="n in dateArray.slice(35, 42)" :key="n" :class="getDateClassObj(n, 6)" @click="changeDate(n, 'last')">
                {{ n }}
              </span>
            </div>
          </div>
        </div>
        <div class="today" v-show="dateListVisible">
          <span @click="onClickToday">今天</span>
        </div>
        <div class="month-list" v-show="monthListVisible">
          <div class="row" v-for="(monthList, index) in zhCNMonthList" :key="index">
            <span
              :class="{ selected: month === monthObj.num }"
              v-for="monthObj in monthList"
              :key="monthObj.monthText"
              @click="setMonth(monthObj.num)"
            >
              {{ monthObj.monthText }}
            </span>
          </div>
        </div>
        <div class="year-list" v-show="yearListVisible">
          <div class="row">
            <span v-for="n in yearArray.slice(0, 3)" :key="n" @click="setYear(n)" :class="{ sub: n < yearAreaBase, selected: year === n }">
              {{ n }}
            </span>
          </div>
          <div class="row">
            <span v-for="n in yearArray.slice(3, 6)" :key="n" @click="setYear(n)" :class="{ selected: year === n }">
              {{ n }}
            </span>
          </div>
          <div class="row">
            <span v-for="n in yearArray.slice(6, 9)" :key="n" @click="setYear(n)" :class="{ selected: year === n }">
              {{ n }}
            </span>
          </div>
          <div class="row">
            <span
              v-for="n in yearArray.slice(9, 12)"
              :key="n"
              @click="setYear(n)"
              :class="{ sub: n > yearAreaBase + 9, selected: year === n }"
            >
              {{ n }}
            </span>
          </div>
        </div>
        <div class="century-list" v-show="centuryListVisible">
          <div class="row">
            <span
              v-for="(n, index) in centuryArray.slice(0, 3)"
              :key="n"
              @click="setYearAreaBase(n, index)"
              :class="{ sub: index === 0, selected: +n.substring(0, 4) === yearAreaBase }"
            >
              {{ n }}
            </span>
          </div>
          <div class="row">
            <span
              v-for="n in centuryArray.slice(3, 6)"
              :key="n"
              @click="setYearAreaBase(n)"
              :class="{ selected: +n.substring(0, 4) === yearAreaBase }"
            >
              {{ n }}
            </span>
          </div>
          <div class="row">
            <span
              v-for="n in centuryArray.slice(6, 9)"
              :key="n"
              @click="setYearAreaBase(n)"
              :class="{ selected: +n.substring(0, 4) === yearAreaBase }"
            >
              {{ n }}
            </span>
          </div>
          <div class="row">
            <span
              v-for="(n, index) in centuryArray.slice(9, 12)"
              :key="n"
              @click="setYearAreaBase(n, index)"
              :class="{ sub: index === 2, selected: +n.substring(0, 4) === yearAreaBase }"
            >
              {{ n }}
            </span>
          </div>
        </div>
      </div>
    </c-spread>
  </div>
</template>

<script>
import cIcon from '@/components/basic/icon/Icon.vue'
import cSpread from '@/components/others/spread/Spread.vue'
import { fillZeroInTime } from '@/tools/utils.js'
export default {
  name: 'cDatePicker',
  components: {
    cIcon,
    cSpread
  },
  props: {
    defaultValue: {
      type: String,
      validator(val) {
        return !isNaN(Date.parse(val))
      }
    }
  },
  data() {
    return {
      value: '',
      pickerHolderVisible: true,
      pickerVisible: false,
      year: 0,
      month: 0,
      date: 0,
      dateListVisible: true,
      monthListVisible: false,
      yearListVisible: false,
      centuryListVisible: false,
      yearAreaBase: 0,
      century: 0,
      zhCNMonthList: [
        [{ monthText: '一月', num: 1 }, { monthText: '二月', num: 2 }, { monthText: '三月', num: 3 }],
        [{ monthText: '四月', num: 4 }, { monthText: '五月', num: 5 }, { monthText: '六月', num: 6 }],
        [{ monthText: '七月', num: 7 }, { monthText: '八月', num: 8 }, { monthText: '九月', num: 9 }],
        [{ monthText: '十月', num: 10 }, { monthText: '十一月', num: 11 }, { monthText: '十二月', num: 12 }]
      ]
    }
  },
  computed: {
    dateArray() {
      const currentMonthLength = new Date(this.year, this.month, 0).getDate()
      const list = Array.from({ length: currentMonthLength }, (val, index) => index + 1)
      // 将星期天设为 7
      const startDay = new Date(`${this.year}-${this.month}-01`).getDay() || 7
      const prevMonthLength = new Date(this.year, this.month - 1, 0).getDate()
      for (let i = 0; i < startDay - 1; i++) {
        list.unshift(prevMonthLength - i)
      }
      const space = 42 - list.length
      for (let i = 0; i < space; i++) {
        list.push(i + 1)
      }
      return list
    },
    yearArray() {
      return Array.from({ length: 12 }, (val, index) => {
        return this.yearAreaBase - 1 + index
      })
    },
    centuryArray() {
      return Array.from({ length: 12 }, (val, index) => {
        const start = this.century * 100 + (index - 1) * 10
        return `${start}-${start + 9}`
      })
    }
  },
  methods: {
    isEqualValue(dateNum) {
      return `${this.year}-${fillZeroInTime(this.month)}-${fillZeroInTime(dateNum)}` === this.value
    },
    getDateClassObj(dateNum, rowNum) {
      switch (rowNum) {
        case 1:
          return {
            selected: this.date === dateNum && dateNum < 8,
            sub: dateNum > 7,
            value: this.isEqualValue(dateNum) && dateNum < 8
          }
        case 2:
        case 3:
        case 4:
          return {
            selected: this.date === dateNum,
            value: this.isEqualValue(dateNum)
          }
        case 5:
        case 6:
          return {
            selected: this.date === dateNum && dateNum > 22,
            sub: dateNum < 15,
            value: this.isEqualValue(dateNum) && dateNum > 22
          }
        default:
          return {}
      }
    },
    inputFocus(e) {
      e.target.blur()
    },
    change(e) {
      const value = e.target.value
      if (!isNaN(Date.parse(value))) {
        this.setValue(value)
      }
    },
    setDate(str) {
      const time = str ? new Date(str) : new Date()
      this.year = time.getFullYear()
      this.month = time.getMonth() + 1
      this.date = time.getDate()
    },
    onClickToday() {
      this.setDate()
      this.setValue()
      this.pickerVisible = false
    },
    setValue(str) {
      if (str) {
        const time = new Date(str)
        let year = time.getFullYear()
        let month = time.getMonth() + 1
        let date = time.getDate()
        month = fillZeroInTime(month)
        date = fillZeroInTime(date)
        this.value = `${year}-${month}-${date}`
      } else {
        this.value = `${this.year}-${fillZeroInTime(this.month)}-${fillZeroInTime(this.date)}`
      }
    },
    listenDocument(e) {
      // console.log('this.$refs.picker', this.$refs.picker, e)
      if (!this.$refs.picker.contains(e.target) && !this.$refs.input.contains(e.target)) {
        console.log('e.target', e.target, this.$refs.picker.contains(e.target))
        // 点击别处关闭且无 value，将数据初始化
        if (!this.value) {
          this.yearAreaBase = 0
          this.century = 0
          this.setDate(this.defaultValue)
        }
        this.pickerVisible = false
      }
    },
    showList(name) {
      const keys = ['dateListVisible', 'monthListVisible', 'yearListVisible', 'centuryListVisible']
      keys.forEach(key => {
        if (key === name) {
          this[key] = true
        } else {
          this[key] = false
        }
      })
    },
    handleDoubleNext(payload) {
      // 不同显示状态下，双箭头修改不同的值
      if (this.yearListVisible) {
        this.yearAreaBase += payload * 10
      } else if (this.dateListVisible) {
        this.year += payload
      } else if (this.centuryListVisible) {
        this.century += payload
      }
    },
    changeMonth(payload) {
      if (this.month + payload === 13) {
        this.month = 1
        this.year += 1
      } else if (this.month + payload === 0) {
        this.month = 12
        this.year -= 1
      } else {
        this.month += payload
      }
    },
    changeDate(n, tag) {
      if (tag === 'first' && n > 7) {
        this.changeMonth(-1)
      } else if (tag === 'last' && n < 15) {
        this.changeMonth(1)
      }
      this.date = n
      this.setValue()
      this.pickerVisible = false
    },
    setMonth(month) {
      this.month = month
      this.showList('dateListVisible')
    },
    setYear(n) {
      if (n < this.yearAreaBase) {
        this.yearAreaBase -= 10
      } else if (n > this.yearAreaBase + 9) {
        this.yearAreaBase += 10
      } else {
        this.year = n
        this.showList('dateListVisible')
      }
    },
    setYearAreaBase(str) {
      const pattern = /(-?\d+)-/
      let num = 0
      if (pattern.test(str)) {
        num = +RegExp.$1
      }
      if (Math.floor(num / 100) !== this.century) {
        this.century = Math.floor(num / 100)
      } else {
        this.yearAreaBase = num
        this.showList('yearListVisible')
      }
    }
  },
  watch: {
    pickerVisible(val) {
      if (val) {
        document.addEventListener('click', this.listenDocument)
        this.showList('dateListVisible')
        // picker 展开时，如果 value 能转化为日期，则设置数据
        if (!isNaN(Date.parse(this.value))) {
          this.setDate(this.value)
        }
      } else {
        document.removeEventListener('click', this.listenDocument)
      }
    },
    yearListVisible(val) {
      if (val) {
        // 已有，则不赋值
        this.yearAreaBase = this.yearAreaBase || Math.floor(this.year / 10) * 10
      }
    },
    centuryListVisible(val) {
      if (val) {
        this.century = Math.floor(this.yearAreaBase / 100)
      }
    },
    value(value) {
      this.$emit('input', value)
    }
  },
  created() {
    if (!isNaN(Date.parse(this.defaultValue))) {
      this.setValue(this.defaultValue)
      this.setDate(this.defaultValue)
    } else {
      this.setDate()
    }
  },
  beforeDestroy() {
    document.removeEventListener('click', this.listenDocument)
  }
}
</script>

<style lang="scss" scoped>
$p: #409eff;

* {
  box-sizing: border-box;
}

.c-date-picker {
  width: 280px;
  position: relative;

  > .input-wrapper {
    width: 200px;
    position: relative;
    > input {
      width: 100%;
      height: 32px;
      display: block;
      border: 1px solid rgba(0, 0, 0, 0.15);
      border-radius: 2px;
      box-shadow: none;
      padding: 0 5px 0 5px;
      color: rgba(0, 0, 0, 0.65);
      &:focus {
        outline: none;
        border-color: $p;
      }
      &:hover {
        border-color: $p;
      }
    }
    > .label {
      display: block;
      width: 100%;
      height: 32px;
      line-height: 32px;
      padding: 0 5px 0 5px;
      color: rgba(0, 0, 0, 0.45);
      position: absolute;
      top: 0;
      left: 0;
      pointer-events: none;
    }
    > .icon {
      width: 20px;
      height: 20px;
      position: absolute;
      top: 50%;
      right: 5px;
      transform: translateY(-50%);
      cursor: pointer;
      &.clear {
        opacity: 0;
        background: #fff;
        transition: all 0.2s linear;
      }
    }
    &:hover {
      > .icon {
        &.clear {
          opacity: 1;
        }
      }
    }
  }
  > .spread {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    .picker {
      padding: 0 1px;
      width: 100%;
      height: 350px;
      background: #fff;
      color: rgba(0, 0, 0, 0.65);
      position: relative;
      > input {
        width: 100%;
        height: 35px;
        display: block;
        border: none;
        border-bottom: 1px solid rgba(0, 0, 0, 0.15);
        box-shadow: none;
        padding: 0 5px 0 5px;
        color: rgba(0, 0, 0, 0.65);
        &:focus {
          outline: none;
        }
      }
      > .label {
        display: block;
        width: 100%;
        height: 35px;
        line-height: 35px;
        padding: 0 5px 0 5px;
        color: rgba(0, 0, 0, 0.45);
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none;
      }
      > .action-bar {
        width: 100%;
        height: 40px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.15);
        display: flex;
        justify-content: space-between;
        align-items: center;
        user-select: none;
        > .time {
          > span {
            padding: 4px 0;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            user-select: none;
            font-weight: 600;
            &:hover {
              color: $p;
            }
            &.century {
              color: rgba(0, 0, 0, 0.65);
              cursor: default;
            }
          }
        }
        > .icons {
          padding: 0 10px;
          > .icon {
            width: 12px;
            height: 12px;
            cursor: pointer;
            margin-right: 5px;
            &:hover {
              color: $p;
            }
          }
        }
      }
      > .picker-body {
        width: 100%;
        padding: 0 12px;
        > .days {
          width: 100%;
          height: 38px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          > span {
            display: inline-flex;
            width: 26px;
            height: 26px;
            justify-content: center;
            align-items: center;
            cursor: default;
            user-select: none;
          }
        }
        > .dates {
          width: 100%;
          > .row {
            width: 100%;
            height: 32px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            > span {
              display: inline-flex;
              width: 26px;
              height: 26px;
              justify-content: center;
              align-items: center;
              cursor: pointer;
              user-select: none;
              background: #fff;
              transition: all 0.2s linear;
              border-radius: 2px;
              &:hover {
                background: #dff2f2;
              }
              &.selected {
                background: #dff2f2;
              }
              &.sub {
                color: rgba(0, 0, 0, 0.25);
              }
              &.value {
                background: $p;
                color: rgba(255, 255, 255, 0.85);
              }
            }
          }
        }
      }
      > .today {
        width: 100%;
        height: 40px;
        border-top: 1px solid rgba(0, 0, 0, 0.15);
        display: flex;
        justify-content: center;
        align-items: center;
        color: $p;
        margin-top: 5px;
        > span {
          padding: 5px;
          cursor: pointer;
          user-select: none;
        }
      }
      > .month-list,
      > .year-list,
      > .century-list {
        width: 100%;
        height: 275px;
        padding: 0 25px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: stretch;
        > .row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          > span {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 50px;
            height: 24px;
            cursor: pointer;
            background: #fff;
            transition: all 0.2s linear;
            font-size: 14px;
            border-radius: 2px;
            user-select: none;
            &:hover {
              background-color: #dff2f2;
            }
            &.selected {
              background-color: #dff2f2;
            }
            &.sub {
              color: rgba(0, 0, 0, 0.25);
            }
          }
        }
      }
      > .century-list {
        padding: 0 10px;
        > .row {
          > span {
            width: 80px;
            height: 24px;
          }
        }
      }
    }
  }
}
</style>

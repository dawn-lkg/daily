import Vue from 'vue'
import Router from 'vue-router'
import story from '@/components/story'
import home from '@/components/home'
import $ from "../util";

Vue.use(Router);
Vue.prototype.$=$;
Vue.prototype.getdate=getdate;

export default new Router({
  routes: [
    {
      path:'/',
      name:home,
      component:home
    },
    {
      path: '/story/',
      name: 'story',
      component: story
    }
  ]
})

function getdate(data) {
  const date = new Date(data);
  let year = date.getFullYear();
  let currseMonth = date.getMonth() + 1 + "";
  let month=currseMonth.length==1?'0'+currseMonth:currseMonth;
  let currseDay=date.getDate()+'';
  let day =currseDay.length==1?'0'+currseDay:currseDay;;
  return `${year}${month}${day}`
}

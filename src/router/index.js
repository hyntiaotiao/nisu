import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/view/HomePage"
import NisuView1 from "@/view/NisuView1"
import NisuView2 from "@/view/NisuView2"
import NisuView3 from "@/view/NisuView3"
import NisuView4 from "@/view/NisuView4"
import NisuView5 from "@/view/NisuView5"
import NisuView6 from "@/view/NisuView6"
import NisuStoryView from "@/view/NisuStoryView"


const routes = [
  {
    path: '/nisu/1',
    name: 'nisu1',
    component: NisuView1
  },
  {
    path: '/nisu/2',
    name: 'nisu2',
    component: NisuView2
  },
  {
    path: '/nisu/6',
    name: 'nisu3',
    component: NisuView6
  },
  {
    path: '/nisu/3',
    name: 'nisu4',
    component: NisuView3
  },
  {
    path: '/nisu/4',
    name: 'nisu5',
    component: NisuView4
  },
  {
    path: '/nisu/5',
    name: 'nisu6',
    component: NisuView5
  },
  {
    path: '/story',
    name: 'story',
    component: NisuStoryView
  },
  {
    path: "/home/",
    name: "home_index",
    component: HomePage
  },


]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

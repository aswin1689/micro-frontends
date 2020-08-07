import Vue from 'vue';
import VueRouter from 'vue-router';
import ReactMicroFE from '../views/ReactMicroFE.vue'
import VueMicroFE from '../views/VueMicroFE.vue'

if (!window.VueRouter) Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'VueMicroFE',
		component: VueMicroFE,
		props: true
	},
	{
		path: '/react',
		name: 'ReactMicroFE',
		component: ReactMicroFE,
		props: true,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;

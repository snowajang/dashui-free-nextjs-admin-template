import { v4 as uuid } from 'uuid';

export const DashboardMenu = [
	{
		id: uuid(),
		title: 'Dashboard',
		icon: 'home',
		link: '/'
	},
	{
		id: uuid(),
		title: 'Linkage Center',
		grouptitle: true
	},
	{ 
		id: uuid(), 
		title: 'เลขประจำตัวประชาชน',
		icon: 'layers',
		children: [
			{ id: uuid(), link: '/lk/pid/pophouse', name: 'รายการบุคคล'},
			{ id: uuid(), link: '/lk/pid/card', name: 'รายการบัตร' },
			{ id: uuid(), link: '/lk/pid/move', name: 'รายการย้าย' },
			{ id: uuid(), link: '/lk/pid/marray', name: 'รายการสมรส การหย่า' },
			{ id: uuid(), link: '/lk/pid/popinhouse', name: 'รายการคนในบ้าน' },
			{ id: uuid(), link: '/lk/pid/rename', name: 'รายการเปลี่ยนชื่อ' }
		]
	},
	{ 
		id: uuid(), 
		title: 'ชื่อ สกุล',
		icon: 'layers',
		children: [
			{ id: uuid(), link: '/lk/name/pophouse', name: 'รายการบุคคล'},
		]
	},
	{
		id: uuid(), 
		title: 'ชื่อ สกุล เดิม',
		icon: 'layers',
		children: [
			{ id: uuid(), link: '/lk/oldname/pophouse', name: 'รายการบุคคล'},
		]
	},
	{ 
		id: uuid(), 
		title: 'เลขรหัสประจำบ้าน',
		icon: 'layers',
		children: [
			{ id: uuid(), link: '/lk/hid/popinhouse', name: 'รายการคนในบ้าน' },
		]
	},
	{ 
		id: uuid(), 
		title: 'บ้านเลขที่',
		icon: 'layers',
		children: [
			{ id: uuid(), link: '/lk/catm/popinhouse', name: 'รายการคนในบ้าน' },
		]
	},
	{ 
		id: uuid(), 
		title: 'เลขคำร้องขอมีบัตร',
		icon: 'layers',
		children: [
			{ id: uuid(), link: '/lk/bp1/card', name: 'รายการบัตร' },
		]
	},
	{
		id: uuid(),
		title: 'การค้นหาด้วย',
		children: [
			{ id: uuid(), link: '/pages/profile', name: 'ข้อมูลบุคคล' },
			{ id: uuid(), link: '/pages/settings', name: 'Settings'},
			{ id: uuid(), link: '/pages/billing', name: 'Billing' },
			{ id: uuid(), link: '/pages/pricing', name: 'Pricing'},
			{ id: uuid(), link: '/not-found', name: '404 Error' }
		]
	},	
	{
		id: uuid(),
		title: 'Authentication',
		icon: 'lock',
		children: [
			{ id: uuid(), link: '/authentication/sign-in', name: 'Sign In' },
			{ id: uuid(), link: '/authentication/sign-up', name: 'Sign Up' },
			{ id: uuid(), link: '/authentication/forget-password', name: 'Forget Password'}			
		]
	},
	{
		id: uuid(),
		title: 'Layouts',
		icon: 'layout',
		link: '/layout-vertical'
	},	
	{
		id: uuid(),
		title: 'UI COMPONENTS',
		grouptitle: true
	},	
	{
		id: uuid(),
		title: 'Components',
		icon: 'monitor',
		children: [
			{ id: uuid(), link: '/components/accordions', name: 'Accordions' },
			{ id: uuid(), link: '/components/alerts', name: 'Alerts' },
			{ id: uuid(), link: '/components/badges', name: 'Badges' },
			{ id: uuid(), link: '/components/breadcrumbs', name: 'Breadcrumbs' },
			{ id: uuid(), link: '/components/buttons', name: 'Buttons' },
			{ id: uuid(), link: '/components/button-group', name: 'ButtonGroup' },
			{ id: uuid(), link: '/components/cards', name: 'Cards' },
			{ id: uuid(), link: '/components/carousels', name: 'Carousel' },
			{ id: uuid(), link: '/components/close-button', name: 'Close Button' },
			{ id: uuid(), link: '/components/collapse', name: 'Collapse' },
			{ id: uuid(), link: '/components/dropdowns', name: 'Dropdowns' },
			{ id: uuid(), link: '/components/list-group', name: 'Listgroup' },
			{ id: uuid(), link: '/components/modal', name: 'Modal' },
			{ id: uuid(), link: '/components/navs', name: 'Navs' },
			{ id: uuid(), link: '/components/navbar', name: 'Navbar' },
			{ id: uuid(), link: '/components/offcanvas', name: 'Offcanvas' },
			{ id: uuid(), link: '/components/overlays', name: 'Overlays' },
			{ id: uuid(), link: '/components/pagination', name: 'Pagination' },
			{ id: uuid(), link: '/components/popovers', name: 'Popovers' },
			{ id: uuid(), link: '/components/progress', name: 'Progress' },
			{ id: uuid(), link: '/components/spinners', name: 'Spinners' },
			{ id: uuid(), link: '/components/tables', name: 'Tables' },
			{ id: uuid(), link: '/components/toasts', name: 'Toasts' },
			{ id: uuid(), link: '/components/tooltips', name: 'Tooltips' }
		]
	},	
	{
		id: uuid(),
		title: 'Menu Level',
		icon: 'corner-left-down',
		children: [
			{ 
				id: uuid(), 
				link: '#', 
				title: 'Two Level',
				children: [
					{ id: uuid(), link: '#', name: 'NavItem 1'},
					{ id: uuid(), link: '#', name: 'NavItem 2' }
				]
			},
			{ 
				id: uuid(), 
				link: '#', 
				title: 'Three Level',
				children: [
					{ 
						id: uuid(), 
						link: '#', 
						title: 'NavItem 1',
						children: [
							{ id: uuid(), link: '#', name: 'NavChildItem 1'},
							{ id: uuid(), link: '#', name: 'NavChildItem 2'}
						]
					},
					{ id: uuid(), link: '#', name: 'NavItem 2' }
				]
			}
		]
	},	
	{
		id: uuid(),
		title: 'Documentation',
		grouptitle: true
	},
	{
		id: uuid(),
		title: 'Docs',
		icon: 'clipboard',
		link: '/documentation'
	},
	{
		id: uuid(),
		title: 'Changelog',
		icon: 'git-pull-request',
		link: '/changelog'
	},
	{
		id: uuid(),
		title: 'Download',
		icon: 'download',
		link: 'https://codescandy.gumroad.com/l/dashui-nextjs'
	}
];

export default DashboardMenu;

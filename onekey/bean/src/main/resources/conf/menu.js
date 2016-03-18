[ {
	name : "acl",
	description : "访问控制",
	menu : true,
	url : null,
	hilightKey : "acl",
	level : 0,
	icon : "users",
	sub : [ {
		name : "user_admin",
		description : "用户管理",
		menu : true,
		url : "user/list",
		hilightKey : "user_admin",
		level : 1,
		icon : "user",
		sub : [ {
			name : "user_add",
			description : "添加用户",
			menu : false,
			url : "user/add",
			hilightKey : "user_admin",
			level : 2,
			icon : "plus-circle"
		}, {
			name : "user_edit",
			description : "编辑用户",
			menu : false,
			url : "user/edit",
			hilightKey : "user_admin",
			level : 2,
			icon : "pencil"
		}, {
			name : "user_delete",
			description : "删除用户",
			menu : false,
			url : "user/delete",
			hilightKey : "user_admin",
			level : 2,
			icon : "trash-o",
		}, {
			name : "user_detail",
			description : "用户详情",
			menu : false,
			url : "user/detail",
			hilightKey : "user_admin",
			level : 2,
			icon : "info-circle",
		}, {
			name : "user_role",
			description : "设置角色",
			menu : false,
			url : "user/role",
			hilightKey : "user_admin",
			level : 2,
			icon : "fire"
		}, {
			name : "user_permission",
			description : "设置权限",
			menu : false,
			url : "user/permission",
			hilightKey : "user_admin",
			level : 2,
			icon : "bolt"
		} ]
	}, {
		name : "role_admin",
		description : "角色管理",
		menu : true,
		url : "role/list",
		hilightKey : "role_admin",
		level : 1,
		icon : "eye",
		sub : [ {
			name : "role_add",
			description : "添加角色",
			menu : false,
			url : "role/add",
			hilightKey : "role_admin",
			level : 2,
			icon : "plus-circle",
		}, {
			name : "role_edit",
			description : "编辑角色",
			menu : false,
			url : "role/edit",
			hilightKey : "role_admin",
			level : 2,
			icon : "pencil",
		}, {
			name : "role_delete",
			description : "删除角色",
			menu : false,
			url : "role/delete",
			hilightKey : "role_admin",
			level : 2,
			icon : "trash-o",
		}, {
			name : "role_detail",
			description : "角色详情",
			menu : false,
			url : "role/detail",
			hilightKey : "role_admin",
			level : 2,
			icon : "info-circle",
		}, {
			name : "role_permission",
			description : "设置权限",
			menu : false,
			url : "role/permission",
			hilightKey : "role_admin",
			level : 2,
			icon : "bolt",
		} ]
	}, {
		name : "permission_admin",
		description : "权限管理",
		menu : true,
		url : "permission/list",
		hilightKey : "permission_admin",
		level : 1,
		icon : "lock"
	} ]
} ]
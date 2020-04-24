const { User } = require('../../model/user')
module.exports = async (req, res) => {
    //表示当前访问的是用户管理页面
    req.app.locals.currentLicnk = 'user'
    const { message, id } = req.query;
    if (id) {
        let user = await User.findOne({ _id: id })
        res.render('admin/user-edit', {
            message: message,
            user: user,
            link: '/admin/user-modify?id=' + id,
            button: '修改'
        })
    } else {
        res.render('admin/user-edit', {
            message: message,
            link: '/admin/user-edit',
            button: '添加'
        })
    }

}
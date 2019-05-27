<?php
// +----------------------------------------------------------------------
// | ThinkCMF [ WE CAN DO IT MORE SIMPLE ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013-2018 http://www.thinkcmf.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: 小夏 < 449134904@qq.com>
// +----------------------------------------------------------------------
namespace app\common\validate;

use app\admin\model\RouteModel;
use think\Validate;

class SubmitInfoValidate extends Validate
{
    protected $rule = [
        'post_name'  => 'require|max:20',
        'email'  => 'require|email',
    ];
    protected $message = [
        'post_name.require' => '姓名不能为空',
        'post_name.max'     => '姓名最多不能超过20个字符',
        'email.require' => '邮箱不能为空',
    
        'email.email'   => '邮箱不正确',
        
    ];

   

    protected $scene = [
//        'add'  => ['user_login,user_pass,user_email'],
//        'edit' => ['user_login,user_email'],
    ];

    // 自定义验证规则
    protected function checkAlias($value, $rule, $data)
    {
        if (empty($value)) {
            return true;
        }


    }
}
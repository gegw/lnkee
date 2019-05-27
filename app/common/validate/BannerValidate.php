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

use think\Validate;

class BannerValidate extends Validate
{
    protected $rule = [
        'categories' => 'require',
        'address' => 'require',
        'post_title' => 'require',
    ];
    protected $message = [
        'categories.require' => '请指定广告页面！',
        'address.require' => '请指定广告位置！',
        'post_title.require' => '广告标题不能为空！',
    ];

    protected $scene = [
//        'add'  => ['user_login,user_pass,user_email'],
//        'edit' => ['user_login,user_email'],
    ];
}
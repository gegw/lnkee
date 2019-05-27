<?php
// +----------------------------------------------------------------------
// | ThinkCMF [ WE CAN DO IT MORE SIMPLE ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013-2018 http://www.thinkcmf.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: 老猫 <thinkcmf@126.com>
// +----------------------------------------------------------------------
namespace app\portal\controller;
use app\admin\service\BannerService;

use cmf\controller\HomeBaseController;

class ReportController extends HomeBaseController
{
    public function index()
    {
    	$bannerService = new BannerService();
    	 $param['category'] =8;
        $param['address'] =3;
        $data = $bannerService->adminArticleList($param);
        $this->assign('banner', $data->items());
    	unset($param);
        $param['address'] =7;
        $data = $bannerService->adminArticleList($param);
        $this->assign('report', $data->items());

        return $this->fetch();
    }
}

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
use app\portal\model\SubmitInfoModel;
use cmf\controller\HomeBaseController;
use app\admin\service\BannerService;

class IndexController extends HomeBaseController
{
    public function index()
    {   
        
        $bannerService = new BannerService();
        //轮播图
        $param['category'] =3;
        $param['address'] =3;
        $data = $bannerService->adminArticleList($param);
        $this->assign('banner', $data->items());
        unset($param);
        //亮点
        $param['category'] =3;
        $param['address'] =2;
        $data = $bannerService->adminArticleList($param);
        $this->assign('brightspot', $data->items());
        unset($param);
        //关于峰会
        $param['category'] =3;
        $param['address'] =1;
        $data = $bannerService->adminArticleList($param);
        $this->assign('about', $data->items());
        unset($param);

        //嘉宾
        $param['category'] =3;
        $param['address'] =4;
        $data = $bannerService->adminArticleList($param);
        $this->assign('guest', $data->items());
        unset($param);
        //报道
        $param['category'] =3;
        $param['address'] =7;
        $data = $bannerService->adminArticleList($param);
        $this->assign('report', $data->items());
         //图集
        $param['category'] =3;
        $param['address'] =8;
        $data = $bannerService->adminArticleList($param);
        $this->assign('atlas', $data->items());
        //主办单位
        $param['category'] =3;
        $param['address'] =10;
        $data = $bannerService->adminArticleList($param);
        $this->assign('sponsor', $data->items());
        //承办单位
        $param['category'] =3;
        $param['address'] =11;
        $data = $bannerService->adminArticleList($param);
        $this->assign('undertake', $data->items());
         //支持单位
        $param['category'] =3;
        $param['address'] =12;
        $data = $bannerService->adminArticleList($param);
        $this->assign('supportingunit', $data->items());
        
       // var_dump($param);var_dump($data->items());die();
        return $this->fetch(':index');
    }
        public function addPost()
    {
        $sumbitInfoModel = new SubmitInfoModel();

        $data = $this->request->param();

        $result = $this->validate($data, 'SubmitInfo');

        if ($result !== true) {
            $this->error($result);
        }
        $data['create_time'] = time();
        $result = $sumbitInfoModel->addSubmit($data);

        if ($result === false) {
            $this->error('添加失败!');
        }

        $this->success('添加成功!', url('Index/index'));

    }
}

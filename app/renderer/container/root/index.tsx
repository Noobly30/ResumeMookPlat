import React, { useEffect } from 'react';
import './index.less';
import { useHistory } from 'react-router';
import { shell } from 'electron';
import { useSelector,useDispatch } from 'react-redux';

import Logo from '@assets/logo.png';
import { ROUTER_KEY, ROUTER_ENTRY } from '@src/common/constants/router';
import { isHttpOrHttpsUrl } from '@common/utils/router';



function Root() {
    const dispatch = useDispatch(); //用于发起action修改state值
    const appName = useSelector((state: any) => state.globalModel.appName);

    useEffect(() => {
        setTimeout(() => {
            console.log('3s后修改');
            dispatch({
                type: 'globalModel/setStore',
                payload: {
                    key: 'appName',
                    values: 'visResumeMook',
                },
            });
        }, 3000);
    }, []);

    useEffect(() => {
        console.log('appName=', appName);
    }, [appName]);

    //通过history.push跳转
    const history = useHistory();

    //添加onClick事件
    const onRouterToLink = (router: TSRouter.Item) => {
        if (isHttpOrHttpsUrl(router.url)){
            shell.openExternal(router.url);
        } else {
            history.push(router.url);
        }
    };

    return (
        <div styleName="root">
            <div styleName="container">
                <img src={Logo} alt="" />
                <div styleName="title">VisResumeMook</div>
                <div styleName="tips">一个模板简历制作平台, 让你的简历更加出众 ~</div>
                <div styleName="action">
                    {ROUTER_ENTRY.map((router: TSRouter.Item) => {
                        return (
                            <div key={router.key} styleName="item" onClick={()=>onRouterToLink(router)}>
                                {router.text}
                            </div>
                        )
                    })}
                </div>
                <div styleName="copyright">
                    <div styleName="footer">
                        <p styleName="copyright">
                            Copyright © 2018-{new Date().getFullYear()} All Rights Reserved. Copyright By pengdaokuan
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Root;
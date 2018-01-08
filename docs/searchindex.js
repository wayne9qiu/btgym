Search.setIndex({docnames:["btgym","btgym.algorithms","btgym.datafeed","btgym.envs","btgym.rendering","btgym.research","index","intro"],envversion:53,filenames:["btgym.rst","btgym.algorithms.rst","btgym.datafeed.rst","btgym.envs.rst","btgym.rendering.rst","btgym.research.rst","index.rst","intro.rst"],objects:{"btgym.algorithms":{aac:[1,0,0,"-"],envs:[1,0,0,"-"],launcher:[1,0,0,"-"],losses:[1,0,0,"-"],memory:[1,0,0,"-"],nn_utils:[1,0,0,"-"],policy:[1,0,0,"-"],rollout:[1,0,0,"-"],runner:[1,0,0,"-"],worker:[1,0,0,"-"]},"btgym.algorithms.aac":{A3C:[1,1,1,""],BaseAAC:[1,1,1,""],PPO:[1,1,1,""],Unreal:[1,3,1,""]},"btgym.algorithms.aac.BaseAAC":{get_data:[1,2,1,""],get_pc_feeder:[1,2,1,""],get_rp_feeder:[1,2,1,""],get_vr_feeder:[1,2,1,""],make_policy:[1,2,1,""],process:[1,2,1,""]},"btgym.algorithms.envs":{AtariRescale42x42:[1,1,1,""]},"btgym.algorithms.launcher":{Launcher:[1,1,1,""]},"btgym.algorithms.launcher.Launcher":{clear_port:[1,2,1,""],make_cluster_spec:[1,2,1,""],run:[1,2,1,""]},"btgym.algorithms.losses":{aac_loss_def:[1,4,1,""],pc_loss_def:[1,4,1,""],ppo_loss_def:[1,4,1,""],rp_loss_def:[1,4,1,""],value_fn_loss_def:[1,4,1,""]},"btgym.algorithms.memory":{Memory:[1,1,1,""]},"btgym.algorithms.memory.Memory":{_sample_priority:[1,2,1,""],add:[1,2,1,""],add_rollout:[1,2,1,""],fill:[1,2,1,""],sample_uniform:[1,2,1,""]},"btgym.algorithms.nn_utils":{conv1d:[1,4,1,""],conv2d:[1,4,1,""],conv2d_dw:[1,4,1,""],conv_1d_network:[1,4,1,""],conv_2d_network:[1,4,1,""],deconv2d:[1,4,1,""],dense_aac_network:[1,4,1,""],dense_rp_network:[1,4,1,""],duelling_pc_network:[1,4,1,""],linear:[1,4,1,""],lstm_network:[1,4,1,""],pixel_change_2d_estimator:[1,4,1,""]},"btgym.algorithms.policy":{Aac1dPolicy:[1,1,1,""],BaseAacPolicy:[1,1,1,""]},"btgym.algorithms.policy.BaseAacPolicy":{act:[1,2,1,""],get_initial_features:[1,2,1,""],get_pc_target:[1,2,1,""],get_value:[1,2,1,""]},"btgym.algorithms.rollout":{Rollout:[1,1,1,""],make_data_getter:[1,4,1,""]},"btgym.algorithms.rollout.Rollout":{add:[1,2,1,""],add_memory_sample:[1,2,1,""],get_frame:[1,2,1,""],pop_frame:[1,2,1,""],process:[1,2,1,""],process_rp:[1,2,1,""]},"btgym.algorithms.runner":{RunnerThread:[1,1,1,""],env_runner:[1,4,1,""]},"btgym.algorithms.runner.RunnerThread":{run:[1,2,1,""]},"btgym.algorithms.worker":{Worker:[1,1,1,""]},"btgym.algorithms.worker.Worker":{run:[1,2,1,""]},"btgym.datafeed":{base:[2,0,0,"-"],derivative:[2,0,0,"-"],stateful:[2,0,0,"-"]},"btgym.datafeed.base":{BTgymBaseData:[2,1,1,""],random_beta:[2,4,1,""]},"btgym.datafeed.base.BTgymBaseData":{_sample_interval:[2,2,1,""],_sample_random:[2,2,1,""],describe:[2,2,1,""],read_csv:[2,2,1,""],reset:[2,2,1,""],sample:[2,2,1,""],set_logger:[2,2,1,""],set_params:[2,2,1,""],to_btfeed:[2,2,1,""]},"btgym.datafeed.derivative":{BTgymDataTrial:[2,1,1,""],BTgymDataset:[2,1,1,""],BTgymEpisode:[2,1,1,""],BTgymRandomDataDomain:[2,1,1,""]},"btgym.datafeed.stateful":{BTgymSequentialDataDomain:[2,1,1,""]},"btgym.datafeed.stateful.BTgymSequentialDataDomain":{reset:[2,2,1,""],sample:[2,2,1,""]},"btgym.dataserver":{BTgymDataFeedServer:[0,1,1,""]},"btgym.dataserver.BTgymDataFeedServer":{run:[0,2,1,""]},"btgym.envs":{backtrader:[3,0,0,"-"]},"btgym.envs.backtrader":{BTgymEnv:[3,1,1,""]},"btgym.envs.backtrader.BTgymEnv":{_assert_response:[3,2,1,""],_close:[3,2,1,""],_comm_with_timeout:[3,5,1,""],_force_control_mode:[3,2,1,""],_get_dataset_info:[3,2,1,""],_print_space:[3,2,1,""],_render:[3,2,1,""],_restart_data_server:[3,2,1,""],_restart_server:[3,2,1,""],_seed:[3,2,1,""],_start_data_server:[3,2,1,""],_start_server:[3,2,1,""],_step:[3,2,1,""],_stop_data_server:[3,2,1,""],_stop_server:[3,2,1,""],get_stat:[3,2,1,""],reset:[3,2,1,""],reset_data:[3,2,1,""],stop:[3,2,1,""]},"btgym.rendering":{plotter:[4,0,0,"-"],renderer:[4,0,0,"-"]},"btgym.rendering.plotter":{BTgymPlotter:[4,1,1,""],DrawCerebro:[4,1,1,""]},"btgym.rendering.plotter.BTgymPlotter":{savefig:[4,2,1,""]},"btgym.rendering.plotter.DrawCerebro":{run:[4,2,1,""]},"btgym.rendering.renderer":{BTgymNullRendering:[4,1,1,""],BTgymRendering:[4,1,1,""]},"btgym.rendering.renderer.BTgymRendering":{draw_episode:[4,2,1,""],draw_image:[4,2,1,""],draw_plot:[4,2,1,""],initialize_pyplot:[4,2,1,""],parse_response:[4,2,1,""],render:[4,2,1,""],rgb_empty:[4,2,1,""],to_string:[4,2,1,""]},"btgym.research":{policy_stacked_lstm:[5,0,0,"-"],strategy_4:[5,0,0,"-"]},"btgym.research.policy_stacked_lstm":{AacStackedRL2Policy:[5,1,1,""],StackedLstmPolicy:[5,1,1,""]},"btgym.research.policy_stacked_lstm.AacStackedRL2Policy":{get_initial_features:[5,2,1,""]},"btgym.research.strategy_4":{DevStrat_4_10:[5,1,1,""],DevStrat_4_11:[5,1,1,""],DevStrat_4_6:[5,1,1,""],DevStrat_4_7:[5,1,1,""],DevStrat_4_8:[5,1,1,""],DevStrat_4_9:[5,1,1,""]},"btgym.research.strategy_4.DevStrat_4_10":{get_reward:[5,2,1,""]},"btgym.research.strategy_4.DevStrat_4_6":{get_reward:[5,2,1,""],next:[5,2,1,""]},"btgym.research.strategy_4.DevStrat_4_7":{get_reward:[5,2,1,""]},"btgym.server":{BTgymServer:[0,1,1,""]},"btgym.server.BTgymServer":{get_data:[0,2,1,""],run:[0,2,1,""]},"btgym.spaces":{DictSpace:[0,1,1,""]},btgym:{dataserver:[0,0,0,"-"],server:[0,0,0,"-"],spaces:[0,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"],"5":["py","staticmethod","Python static method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function","5":"py:staticmethod"},terms:{"0_record":2,"1_time_unit":2,"2_rnn":5,"2nd":1,"3rd":1,"42x42":1,"4_10":5,"4_6":5,"4_7":5,"case":[1,2,5],"class":[0,1,2,3,4,5,7],"default":[0,2,3,4,5,7],"final":1,"float":2,"function":[1,2,5],"import":7,"int":[0,1,2,3],"long":1,"new":[0,3,5],"return":[0,1,2,3,4,5,7],"short":7,"static":3,"true":[1,2,3,4,5,7],"while":[1,2,7],Adding:7,For:[3,7],NOT:1,One:1,Such:[],That:4,The:[1,2,5,7],Then:2,There:1,USED:1,Uses:5,_4_6:[],_aac_:1,_assert_respons:3,_btgymanalyz:7,_close:3,_comm_with_timeout:3,_config_stack:2,_done:[0,7],_force_control_mod:3,_get_dataset_info:3,_getstat:[0,7],_pc_:1,_ppo_:1,_print_spac:3,_real:1,_render:3,_reset:[0,7],_restart_data_serv:3,_restart_serv:3,_rp_:1,_sample_interv:2,_sample_prior:1,_sample_random:2,_seed:3,_start_data_serv:3,_start_serv:[0,3],_step:3,_stop:[0,7],_stop_data_serv:3,_stop_serv:[3,7],_struct:1,_tab:3,_update_param:[],_use_target_polici:1,_vr_:1,a3c:[1,5,6],aac1dpolici:1,aac:6,aac_loss_def:1,aacrl2polici:[],aacstackedrl2polici:5,abov:[1,2],abs:1,absolut:1,ac_spac:[1,5],accept:[1,3,7],accord:[2,3,7],accumul:[],achiev:7,act:1,act_target:1,action:[0,1,3,5,7],action_reward:1,action_spac:3,actor:[1,7],actual:[2,3,4,7],add:[0,1,5,7],add_memory_sampl:1,add_rollout:1,addanalyz:7,adddata:[],address:3,addsiz:7,addstrategi:7,aded:5,adv_target:1,advanc:[1,7],advantag:[1,7],after:[1,7],again:[],agent:[0,1,4,5,7],agent_act:0,ahead:7,aim:5,aka:1,algo:7,algorithm:[5,7],algoritm:7,alia:[1,2],alik:1,all:[1,2,3,5,7],allow:[1,2],along:[1,7],alpha:[2,4],alreadi:[4,7],also:[1,2],altern:1,alwai:2,among:[],amount:2,analyt:7,analyz:7,ang:5,ani:[0,1,3,7],anneal:[],anoth:[1,5],anywai:1,apach:1,api:3,api_shel:3,apll:1,appear:4,append:1,appli:3,applic:5,approach:[1,7],arbitrari:[],architectur:[5,7],arg:[0,1,2,3,4,5],argument:[1,3,7],arhcitectur:[],arrai:[0,1,2,4,5],array_lik:2,arxiv:[1,5],ascend:2,ascii:2,ask:1,assum:7,async:1,asynchron:[0,1],atari:1,atari_test:1,atarirescale42x42:1,attempt:[1,5,7],attribut:[0,2,4],augment:[1,5],aux:[1,7],aux_estim:[1,5],auxiliari:[0,1,5],auxillari:1,average_period:5,avg_period:5,b_alpha:2,b_anneal_step:[],b_beta:2,back:[2,7],backtest:[3,7],backtrad:[0,4,6,7],base:[1,3,5,6,7],base_aac:7,base_data:2,baseaac:1,baseaacpolici:1,basebtgymdataset:2,baselin:1,basic:5,basiclstmcel:1,batch:[1,2],batch_siz:1,bayesian:2,bbox:4,becaus:1,been:[1,2,5],befor:[1,3,4,7],begin:[1,7],beginningg:2,behavior:1,behaviour:4,being:2,below:[1,7],besid:7,beta:[1,2],between:[1,5],bias_init:1,bind:0,block:[4,7],bodi:[0,1],bold:4,bool:[0,1,2,3,5],bore:[],borrow:1,both:[1,2],box:7,box_text:4,brief:1,broadcast:2,broker:[5,7],btgym:7,btgym_aac_log:1,btgym_serv:3,btgymbasedata:2,btgymbasedatatri:2,btgymbasestrategi:[5,7],btgymdata:2,btgymdatadomain:3,btgymdatafeedserv:0,btgymdataset:[2,7],btgymdatatri:2,btgymenv:[3,7],btgymepisod:2,btgymnullrend:4,btgymplott:4,btgymrandomdatadomain:2,btgymrandomtri:[],btgymrend:4,btgymsequentialdatadomain:2,btgymsequentialtri:[],btgymserv:0,btgymstrategi:7,btgymtrialrandomiter:[],btgyn:1,btserver:7,buggi:6,bui:0,built:4,call:[1,2,3,4,5,7],callabl:1,callback:[1,5],can:[1,2,4,6,7],cardin:2,carri:5,cast:[],caution:1,caveat:2,cerbro:7,cerebro:[0,3,4,7],certain:1,chang:[1,5,6,7],channel:[2,5],check:[2,3,7],checkpoint:1,chek:[],chief:1,child:2,class_config_dict:1,class_ref:1,classif:1,classifi:1,clear_port:1,clearli:1,clip:1,clip_epsilon:1,clone:7,close:[0,2,3,5,7],closer:1,closest:[],cluster:1,cluster_config:1,cluster_spec:1,code:1,collect:[1,7],color:4,column:2,com:[1,2,7],come:1,commiss:7,commun:[0,3,7],compat:7,complet:3,complex:[5,7],compos:[1,7],comput:[1,3,7],computation:[1,7],con:1,concaten:[1,5],concept:[2,7],concern:4,condit:7,config:1,configur:[0,1,2,3],conjunct:5,connect:[1,3],connect_timeout:[0,3],conolut:7,consid:[],constant:[1,7],constantli:1,constructor:1,contain:[0,1,2],content:1,context:[1,5,7],context_depth:1,continu:[1,2],contrib:5,control:[0,1,3,4,7],conv1d:1,conv2d:1,conv2d_dw:1,conv:5,conv_1d_filter_s:1,conv_1d_network:1,conv_1d_num_filt:1,conv_1d_num_lay:1,conv_1d_strid:1,conv_2d_filter_s:1,conv_2d_layer_ref:1,conv_2d_network:1,conv_2d_num_filt:1,conv_2d_num_lay:1,conv_2d_strid:1,convent:[1,4],converg:[1,7],convers:2,convert:[1,2,4],convolut:[1,7],copi:7,core:[0,2,7],corr:1,correct:2,correctli:2,correspond:[3,7],cost:7,could:0,count:2,crazi:4,creat:2,critic:[1,7],crop:1,csv:[2,3,7],current:[0,2,3,4,5],custom:[3,7],cvpr2010:1,dai:[2,7],dat_ascii_eurusd_m1_2016:7,data:[0,1,2,3,4,5,7],data_filenam:2,data_mast:3,data_network_address:[0,3],data_port:3,data_serv:3,datadomain:5,datafe:[0,3,5,6],datafeed_arg:3,datafil:7,datafram:2,dataserv:6,dataset:[0,2,3,7],dataset_arg:[],dataset_stat:0,datatrialiter:5,date_tim:2,datetim:2,dayaset:[],debug:[1,3],decai:1,decis:[],deconv2d:1,deconvolut:1,deep:[6,7],def:[1,2],defin:[0,1,2,5,7],definit:[1,6],delai:1,deliv:5,demo:[],denomin:1,dense_aac:1,dense_aac_network:1,dense_rp_network:1,depend:[5,7],deprec:2,depth:1,depthwis:1,deriv:6,describ:2,descript:[1,2,3,6],design:7,desir:1,despit:1,detail:[2,3,7],detect:[],dev:2,devstrat_4_10:5,devstrat_4_11:5,devstrat_4_6:5,devstrat_4_7:5,devstrat_4_8:5,devstrat_4_9:5,diagram:7,dict:[0,1,2,4,7],dictionari:[0,1,2,3,4,5],dictspac:[0,1],differ:[1,2,5],dilat:2,dim:[1,5],dimens:1,dimension:1,direct:2,directli:2,directori:1,dirichlet:2,disabl:[],disclaim:7,discount:1,discret:[1,5],disentangl:5,disk:[4,7],distinct:1,distr:1,distribut:[1,2,5],doc:7,docu:7,document:7,doe:3,doesnt:[2,7],domain:[0,2],done:[0,3,4,7],down:[0,7],downgrad:7,dpi:4,draft:6,draw:2,draw_episod:4,draw_imag:4,draw_plot:4,drawcerebro:4,drawdown:7,drawdown_cal:7,drawn:2,drive:4,dtype:1,duan:[5,7],due:[1,2,4],duell_pc_filter_s:1,duell_pc_strid:1,duell_pc_x_inner_shap:1,duelling_pc_network:1,duplic:2,durat:2,dure:[],dynam:[1,3,7],each:1,earliest:2,edu:5,eestim:7,effici:[0,2,7],eihter:[],either:[1,2,5,7],element:[],els:[2,3,4,5],embed:5,empir:1,empti:4,enabl:[0,2,3,7],encapsul:[1,4],encod:[1,7],encode_internal_st:5,end:[4,5],end_tim:[],engin:[0,3,6],ensur:1,entir:[1,2,4],entri:1,entropi:1,entropy_beta:1,entry_point:7,env:[0,5,6,7],env_config:1,env_id:1,env_param:7,env_render_freq:1,env_runn:1,environ:[0,1,3,4,5],environmnet:[0,1,2],ep_summari:1,episod:[0,1,2,3,4,5,7],episode_dur:[2,7],episode_param:2,episode_summary_freq:1,episode_typ:[],episodedataset:[],epsilon:1,equal:[1,2],equival:[],establish:3,estim:[0,1,5,7],etc:[1,7],everi:[1,2,5,7],everyon:7,exact:[1,7],exact_s:1,exampl:[2,7],exce:1,except:[1,3],exchang:3,exclud:4,execut:[0,3,7],exhaust:2,exist:3,exp:[],exp_decai:[],expand:2,expect:[0,1,3,5],expens:[1,7],experi:[1,7],experiment:7,explain:[],explicitli:7,explor:7,exponenti:[],exposur:5,extens:[3,7],extern:[1,3,5,7],extra:1,extract:1,facecolor:4,fact:1,factor:[1,5],fall:7,fals:[1,2,3,5],fashion:1,fast:[5,7],faster:1,favorit:7,featur:[0,1,4,5,7],fed:[1,7],feed:[1,2,7],fi_1:5,fi_2:5,fi_3:5,field:0,fig:4,figsiz:4,file:[1,2,3,4],file_nam:2,filenam:[2,3,4,7],fill:1,filter_s:1,finish:[3,7],finit:3,first:[1,2,3,4,7],first_row:[],fix:2,fl32:0,flag:0,flatten:1,flexibl:7,float32:1,follow:7,fontsiz:4,fontweight:4,forc:[2,3,5],force_reload:2,forex:2,forker:1,form:[2,5,7],formal:6,format:4,found:5,frame:1,framework:[1,6],from:[1,2,3,5,7],full:[1,2,5],further:2,futur:7,gae:1,gae_lambda:1,gamma:[1,2,5],gamma_pc:1,gap:2,gener:[2,6,7],get:[1,2,3,4],get_data:[0,1],get_fram:1,get_info:7,get_initial_featur:[1,5],get_interv:[],get_pc_feed:1,get_pc_target:1,get_reward:[5,7],get_rp_feed:1,get_sampl:[],get_stat:[3,7],get_valu:1,get_vr_feed:1,getter:1,git:7,github:[1,7],give:[1,2],given:[1,2,3,4,7],global:1,global_step:[1,2],goe:7,good:4,grab:1,grad:5,grade:6,graph:1,grayscal:1,gym:[0,1,2,3,4,7],hacki:4,halt:7,handl:4,has:[1,2,5],have:[1,4,7],header:2,heavili:1,height:4,here:[1,2],hidden:7,high:[1,2,5,7],high_bound:1,higher:2,highli:7,histdata:2,histor:[2,7],history_s:1,hold:[0,1,2,7],holidai:2,hopefulli:[],horizon:[],host:1,hot:[1,5],hour:[2,7],html:7,http:[1,5,7],human:3,icml99:5,idea:[1,7],identifi:1,idx:1,ignor:[2,3,7],iid:1,imag:4,impact:7,implement:[1,2,3,5,7],improv:[2,7],includ:7,incom:[1,7],increas:[],increment:[],index:[6,7],index_col:2,induc:2,infer:2,info:[0,1,3,4,7],inform:[0,7],initi:[1,5,7],initialis:7,initialize_pyplot:4,inner:[5,7],inner_conv_encod:5,input:1,insid:[1,4],inspir:[],instal:6,instanc:[0,1,2,3,4,7],instanti:[1,7],instead:1,integ:[1,2],integr:[6,7],interact:1,interest:1,intermedi:2,intern:[1,4,5],interv:2,interval_sample_:2,invari:5,invok:[0,3],is_don:7,issu:7,iter:[0,2],its:[],itself:[2,7],jimmi:7,job_nam:1,just:[1,4],keep:1,kei:[1,2,3,5],keyerror:5,keyword:[1,3],kill:1,kind:7,kismuz:7,know:7,kosuk:1,kwarg:[1,2,3,4,5,7],lambda:1,last:[0,1,2,3,4,5,7],last_context:5,last_record:2,last_row:[],last_stat:1,later:1,latest:7,launch:1,launcher:6,layer:[1,5,7],layernormbasiclstmcel:5,leak:4,learn:[1,5,7],least:[0,1],leav:3,length:[1,2,5],less:[1,4],let:3,level:[0,1,2,3,5],level_2:[],librari:[3,7],licenc:1,licens:1,lie:2,lies:2,like:[1,2,7],lin_decai:[],line:[0,3,4],linear:1,link:[],list:[0,1,2,3],littl:1,load:2,local:[4,7],localhost:[],log:[1,3,5],log_dir:1,log_level:[0,1,2,3],log_uniform:1,logbook:[0,1,2,3],logger:[1,2,3],logic:[1,3,4,7],logit:[1,5],longer:2,look:[4,7],loop:[2,7],loss:[5,6],losss:7,low:[1,2,5,7],low_bound:1,lower:5,lower_row_numb:2,lstm:[1,5,7],lstm_2_init_period:5,lstm_class:[1,5],lstm_layer:[1,5],lstm_network:1,lstm_sequence_length:1,lstm_state:1,lstmstatetupl:1,made:2,mai:7,mainli:[],make:[1,2,3,7],make_cluster_spec:1,make_data_gett:1,make_polici:1,market:[5,7],markov:[],matplotlib:[4,7],matthewzeil:1,max:[2,4],max_env_step:1,max_episode_dur:[],max_episode_len:2,max_rollout_length:1,max_sample_s:1,max_step:[],max_time_s:1,maxim:[],maximum:[1,2,7],mean:[1,2,3],meanwil:1,mementum:7,memori:[4,6],memory_config:1,memory_s:1,messag:[0,3,7],messg:7,met:7,metadata:5,metatdata:5,method:[0,1,2,3,4,5,7],millisecond:3,min:[2,4],mind:1,mini:1,minut:[2,7],mirowski:[5,7],mit:1,mix:1,miyoshi:1,miyosuda:1,modal:[1,5],mode:[0,1,3,4,7],mode_list:4,model:1,model_beta:1,model_gae_lambda:1,model_gamma:1,model_summary_freq:1,modif:[3,7],modul:6,momentum:1,moneymak:7,monitor:6,more:[1,4,7],motiv:7,much:7,multi:[1,5],multipli:0,must:[1,2],mycerebro:7,mydataset:7,myenviron:7,name:[1,2],name_scop:1,natur:2,nav:5,nav_a3c:7,navig:[5,7],ndarrai:[1,2],necessari:7,need:[1,4,7],neg:[1,2],neither:[4,7],nest:[0,1,2],nethod:3,network:[1,3,5],network_address:[0,3],never:[],nevertheless:1,new_trial:[],next:[2,5,7],nn_util:6,non:[1,2,5,7],non_zero:1,none:[0,1,2,3,4,5,7],nonlinear:1,nor:[4,7],normal:[1,5,7],normalis:[1,2,5,7],note:[1,2,7],noth:3,notic:[1,3],notimpl:0,now:[],num:[0,1],num_env:1,num_epoch:1,num_filt:1,num_p:1,num_work:1,number:[1,2,3],number_of_rollout:1,numpi:4,ob_spac:[1,5],object:[2,5],obs:1,obs_space_kei:[],observ:[0,1,3,4,5,6,7],observation_spac:[],off:[1,5,7],off_aac_lambda:1,off_polici:1,off_policy_loss:1,often:2,old_polici:1,older:1,omit:2,omitt:2,on_polici:1,on_policy_loss:1,on_policy_rollout:1,on_policy_rollout_length:1,one:[1,2,5,7],onli:[1,2,5,7],open:[2,5,7],openai:[1,3,7],openinterest:2,oper:[1,7],ops:[1,5],opt:2,opt_decai:1,opt_decay_step:1,opt_end_learn_r:1,opt_epsilon:1,opt_learn_r:1,opt_max_env_step:1,opt_momentum:1,optim:1,option:[1,2,7],order:[2,7],org:[1,5],origin:[1,7],oth:[],other:[3,7],other_kei:3,other_mod:3,otherwis:[1,2,3],out:[0,2,7],output:[1,2,7],output_channel:1,over:[1,2,3],overal:2,overlap:2,overrid:[1,3,4,7],own:[1,7],paac:1,packag:6,pad:[1,4],page:6,pair:7,panda:[2,7],paper:[1,5,7],parallel:1,param:[2,4],param_0:[],paramet:[0,1,2,3,4,5,7],parameter:2,parameter_serv:1,parametris:2,params_dict:2,parent:[0,1],parmet:7,parralel:1,pars:[2,3],parse_d:2,parse_respons:4,parsing_param:2,part:[1,7],partial:[1,5],particular:[2,7],partit:2,pass:[0,3,4,7],pattern:7,paus:[],pc_estimator_strid:1,pc_lambda:1,pc_loss:1,pc_loss_def:1,pdf:[1,5],penal:5,per:[],percentil:2,perform:[1,2,6,7],period:[1,2],pi_logit:1,pi_old:1,pi_pc_q:1,pi_prime_logit:1,pi_prime_update_period:1,pi_rp_logit:1,pi_vf:1,pictur:4,pid:4,pip:7,pipe:[1,2,7],pix:1,pixel:1,pixel_chang:[1,5],pixel_change_2d_estim:1,pixel_control:1,place:1,placehold:1,plot:[3,4],plotter:6,plug:4,point:2,polici:[5,6,7],policy_config:1,policy_rl2:[],policy_stacked_lstm:6,pomdp:[],poor:6,pop:1,pop_fram:1,popul:2,port:[1,3,7],port_list:1,portfolio:[0,5],pos:1,posit:[1,2,5],possibl:[1,2,4],potenti:5,ppo:[1,6,7],ppo_loss_def:1,preced:2,predefin:[],predict:[1,5],prefer:7,prenext:7,prepar:7,preprocess:1,present:7,prevent:4,previou:[1,2,5],prgn:4,price:[3,4,5,7],priorit:1,priority_sampl:1,priority_sample_s:1,pro:1,probabl:[1,2],problem:[],process:[0,1,3,4,7],process_rp:1,produc:1,profit:5,proper:[1,2],properli:2,properti:1,provid:[0,1,2,3,5,7],proxim:1,pseudocod:7,pull:7,purge_previ:1,purpos:[],put:3,python:[1,5],queri:7,queue:1,quickstart:6,r_target:1,rais:5,random:[1,2,3,7],random_beta:2,random_sample_:2,random_se:1,randomli:[2,7],rang:[],rate:1,rather:7,ratio:1,raw_stat:[3,4,7],rcvtimeo:3,rdata:[],reach:1,read_csv:2,readabl:[],readi:[1,2,3,7],real:[1,5,7],realis:[],realiz:5,realli:3,rebalanc:1,receiv:[0,3,4,5,7],recent:2,reciev:[5,7],recommend:7,record:2,reduc:[1,7],refer:[1,3],regist:7,regular:[1,7],reinforc:[5,7],reject:2,rel:4,relat:[1,2,3,7],releas:3,reli:3,reliabl:4,remot:3,remov:[1,2],render:[0,1,3,6,7],render_arg:3,render_boxtext:4,render_cmap:4,render_dpi:4,render_en:3,render_mod:[3,4],render_plotstyl:4,render_size_episod:4,render_size_human:4,render_size_st:4,render_state_as_imag:4,render_state_channel:4,render_titl:4,render_xlabel:4,render_ylabel:4,rep:3,repali:1,repeat:[2,7],repeatedli:7,replai:[1,7],replay_batch_s:1,replay_memory_s:1,replay_rollout_length:1,repli:7,report:0,repositori:[1,7],repres:3,req:3,request:7,requir:2,requr:7,research:6,reserv:2,reset:[2,3,5,7],reset_data:[2,3],reset_kwarg:0,reshap:1,resourc:[3,4],respect:[1,2,5],respons:[0,3,4,7],restart:3,result:[0,3,5],result_pip:4,retriev:[0,2,3,7],retrurn:4,reus:1,reward:[0,1,3,4,5,7],reward_threshold:1,rewind:0,rgb:4,rgb_arrai:4,rgb_empti:4,right:2,rise:3,rnddatadomain:2,rnn:[1,5,7],rnn_1:5,rnn_2:5,rnn_cell:5,rnn_cell_impl:1,rnn_state:1,rnn_timestep:1,robot:5,rollout:6,rollout_gett:1,rollout_length:1,rollout_provid:1,root_random_se:1,roughli:3,routin:7,row:[],rp_lambda:1,rp_loss:1,rp_loss_def:1,rp_reward_threshold:1,rp_sequence_s:[1,5],rp_target:1,rule:7,run:[0,1,3,4,7],runner:[5,6],runnerthread:1,runtim:[0,1,7],safe:1,sai:1,same:[1,2,7],sampl:[0,1,2,3,5,7],sample_attempt:1,sample_class_ref:2,sample_dur:2,sample_expand:2,sample_num:[],sample_typ:2,sample_uniform:1,samples_per_tri:[],sampling_param:2,save:1,savefig:4,scalar:[1,2],scale:5,scope:1,seaborn:4,search:[5,6],second:[0,3,7],section:6,see:[1,2,5,7],seed:3,seem:7,seen:[2,4],self:[1,5],sell:0,send:[3,7],send_img:4,sensit:3,sent:1,sep:2,separ:[1,2,4,5,7],seqdatadomain:2,sequenc:[1,2],sequence_s:1,sequenti:2,seri:7,server:[1,3,4,6,7],servic:[0,1,7],sess:1,session:1,set:[1,2,3,4,5,7],set_datalin:7,set_logg:2,set_param:2,setcash:7,setcommiss:7,setter:2,setup:7,sever:[1,4,7],sgd:1,shape:[0,1,2,3,5,7],share:[1,5],shell:3,shift:2,should:[1,2,3,7],shuffl:1,shut:[0,7],side:[1,3],signal:[0,1],signal_length:1,silent:[],simpl:[2,3,5,7],simpledataset:2,simpler:0,simpli:7,sinc:[2,7],singl:[1,2,4,5,7],size:[1,2,5,7],sizer:7,sizerfix:7,skew:[1,2],skip:1,skip_fram:[2,7],slide:[2,5],slow:[4,5,7],sma:5,sndtimeo:3,socket:3,solut:7,solv:7,some:[1,2,3],something_els:4,sometim:[],somewhat:7,sort:2,sourc:[0,1,2,3,4,5,7],space:[1,3,5,6,7],spaces_dict:0,special:2,specif:[1,2,3,7],specifi:[1,2],specific_param:2,split:[2,7],split_point_record:2,stabil:7,stabl:7,stack:[1,7],stacked_lstm:5,stackedlstmpolici:5,stage1:1,stage2:1,stage3:1,stake:7,stamp:[],stand:[],stanford:5,start:[1,2,3,5,7],start_00:[2,7],start_tim:[],start_weekdai:[2,7],startegi:[2,3,7],starter:1,stat:5,state:[0,1,3,4,5,6,7],state_high:7,state_low:7,state_onli:[],state_shap:7,stationari:7,statis:0,statist:[0,1,2,3,5,7],statu:[0,3],std:2,stdout:4,steep:[],step:[1,2,3,4,5,7],step_to_rend:4,still:1,stop:[0,3],store:[1,4],str:[0,2,3],strang:4,strategi:[3,5,6,7],strategy_4:6,stream:1,stride:1,string:[0,2,3,4],style:7,subclass:[2,3,7],subgraph:1,subj:2,subject:[6,7],subsampl:1,subsequ:2,subset:[1,2],success:1,suggest:[],summar:1,summari:[1,2],summary_writ:1,supervis:1,suppli:2,support:[0,2],suppos:[1,2,3,4],surrog:1,sweep:2,synthet:5,taken:[1,7],talk:3,target:[1,2],target_period:2,task:[0,1,2,3,5,7],tcp:3,tell:1,tempor:0,tensor:[0,1],tensorboard2:6,tensorboard:[1,6],tensorflow:[1,5],term:[],termin:[0,1,3,7],test:[1,2,5,7],test_data:2,test_end_tim:2,test_end_time_previous_tri:2,test_mod:1,test_period:2,test_rang:[],test_sampl:[],test_start_tim:2,text:4,than:[1,2,7],theori:5,therebi:2,thi:[0,1,2,3,5,6,7],those:1,though:7,thought:2,thougt:7,thread:1,threadrunn:1,three:[5,7],threshold:[1,2],through:[3,5],thu:[1,2],tight:4,time:[1,2,3,5,7],time_:1,time_embed:5,time_flat:[1,7],time_flatten:1,time_gap:[2,7],time_s:1,timefram:2,timelin:[],timeout:3,timestep:4,titl:4,tmp:1,to_btfe:2,to_str:4,todo:[],toler:2,top:2,total:[1,2],total_btgym_dataset_step:2,total_step:2,toward:5,track:7,trade:[3,5,7],trail:[],train:[1,2,5,7],train_data:2,train_end_tim:2,train_rang:[],train_sampl:[],train_start_tim:2,train_start_time_next_tri:2,trainer:1,trainer_config:1,trajectori:1,transform:5,transit:[],trial:[2,5,7],trial_end_tim:2,trial_mean:[],trial_num:5,trial_param:2,trial_rang:[],trial_sampl:0,trial_sequ:2,trial_start_00:[],trial_start_tim:2,trial_stat:0,trial_strid:[],tune:[2,7],tupl:[0,1,2,3,5,7],turn:[],two:[1,2,5,7],twofold:7,type:[0,1,2,3,5,7],under:[1,5],uni:1,uniform:2,uniformli:1,univers:1,unlik:[],unord:[],unreal:[1,5,6,7],unrol:1,unstabl:6,until:[2,7],updat:[1,4,7],update_param:[],upgrad:7,upload:1,upon:[2,7],upper:5,upper_row_numb:2,usag:[],use:[1,2,3,4,5],use_off_policy_aac:1,use_pixel_control:1,use_priority_sampl:1,use_reward_predict:1,use_value_replai:1,used:[1,2,3,5],user:7,uses:[1,7],using:[1,4],usual:2,v5555:7,val:1,valid:2,valu:[0,1,2,4,5,7],value_fn_loss_def:1,vanilla:1,vector:[1,5],verbos:[1,3,7],version:7,via:[2,3,5,7],violat:[],virtual:7,visual:1,visualis:[3,4],volum:2,vr_lambda:1,vr_loss:1,wai:[2,4,7],wait:7,wang:5,want:1,warn:[1,3],watcher:3,weekdai:2,weekend:2,weight:[1,5],well:[1,7],what:[1,7],whatev:3,when:[1,2,3,4,7],where:[0,2],whether:1,which:[1,2,5,7],wich:[],width:4,window:2,wise:1,within:[0,2],without:3,work:[1,7],worker:6,workflow:7,world:7,would:1,wrapper:[0,1,7],write:1,written:4,www:[1,2,5,7],xlabel:4,year:2,yeld:1,yet:1,ylabel:4,you:7,your:[2,7],zero:[1,2,5],zmq:3},titles:["btgym.dataserver module","btgym.algorithms package","btgym.datafeed package","btgym.envs package","btgym.rendering package","btgym.research package","BTGym DOCs","Package Description"],titleterms:{a3c:7,aac:1,algorithm:[1,6],api:6,backtrad:3,base:2,btgym:[0,1,2,3,4,5,6],code:6,data:6,datafe:2,dataserv:0,deriv:2,descript:7,doc:6,engin:7,env:[1,3],environ:[6,7],experiment:6,framework:7,indic:6,instal:7,launcher:1,loss:1,memori:1,modul:[0,1,2,3,4,5],nn_util:1,packag:[1,2,3,4,5,7],pipe:6,plotter:4,polici:1,policy_rl2:[],policy_stacked_lstm:5,quickstart:7,refer:6,render:4,research:5,rollout:1,runner:1,server:0,space:0,state:2,strategy_4:5,tabl:6,worker:1}})
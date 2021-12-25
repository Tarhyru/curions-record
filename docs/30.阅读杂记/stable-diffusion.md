
<https://github.com/AUTOMATIC1111/stable-diffusion-webui>

安装过程
1、准备python3，git
2、克隆上述仓库
4、准备model
5、一键安装（注意依赖位置）

docker
c盘释放
    <https://blog.csdn.net/gianttj/article/details/125673754>
卸载
    <https://blog.csdn.net/KaedaRukawa/article/details/121467655>

python 修改依赖包位置:
    python -m site 查看
    python -m site -help 修改说明
<https://blog.csdn.net/woyizhizaizhaoni/article/details/102954067>


名词解释:
    GFPGAN:人脸补全用的模型

git pull //拉取最新代码，建议使用sourcetree进行更新
pip install -r requirements.txt //可能会有依赖库更新，手动安装一下。
<!-- 4GB 2GB 16XX -->
//运行 低显存可以加 --lowvram  或者 --medvram   
参数:
Sampling Steps  迭代次数建议 50 次以上
Sampling method 扩散去噪算法的采样模式，会带来不一样的效果，ddim 和 pms(plms) 的结果差异会很大，很多人还会使用euler
Restore faces 优化面部
Tiling 生成一个可以平铺的图像

Highres. fix 使用两个步骤的过程进行生成，以较小的分辨率创建图像，然后在不改变构图的情况下改进其中的细节，选择该部分会有两个新的参数 

Scale latent 在潜空间中对图像进行缩放。另一种方法是从潜在的表象中产生完整的图像，将其升级，然后将其移回潜在的空间。
Denoising strength 决定算法对图像内容的保留程度。在0处，什么都不会改变，而在1处，你会得到一个不相关的图像；

Batch count、 Batch size 都是生成几张图，前者计算时间长，后者需要显存大；

CFG Scale 分类器自由引导尺度——图像与提示符的一致程度——越低的值产生越有创意的结果；
Seed 种子数，只要种子数一样，参数一致、模型一样图像就能重新；



Denoising strength 与原图一致性的程度，一般大于0.7出来的都是新效果，小于0.3基本就会原图缝缝补补；

Just resize、 Crop and resize、 Resize and fill 这三种模式保证图输出效果，因为下面会有新的尺寸，是填充还是性对应缩放；



txt2img --- 标准的文字生成图像；
img2img --- 根据图像成文范本、结合文字生成图像；
Extras --- 优化(清晰、扩展)图像；
PNG Info --- 图像基本信息
Checkpoint Merger --- 模型合并
Textual inversion --- 训练模型对于某种图像风格
Settings --- 默认参数修改

教程:
<https://zhuanlan.zhihu.com/p/561112515>
<https://zhuanlan.zhihu.com/p/560226367>

<https://bbs.saraba1st.com/2b/forum.php?mod=viewthread&tid=2098295&extra=page%3D2&page=1&mobile=2>

坏词条

lowres, bad anatomy, bad hands, text,error, missing fngers,extra digt ,fewer digits,cropped, wort quality ,low quality,normal quality, jpeg artifacts,signature,watermark, username, blurry, bad feet


Reddit - lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry,dskjal - deformed, bad_anatomy, disfigured, mutation, mutated, extra_limbs, ugly, fat, missing_limb, floating_limbs, disconnected_limbs, long_neck, long_body, part of the head, mutated hands and fingers, intricate human hands fingers, poorly_drawn hands, malformed_hands, poorly_drawn face,poorly_drawn,asymmetrical _eyes


赛博朋克风
prompt: Cyberpunk, 8k resolution, castle, the rose sea, dream

水墨画风格
prompt: a watercolor ink painting of a fallen angel with a broken halo wielding a jagged broken blade standing on top of a skyscraper in the style of anti - art trending on artstation deviantart pinterest detailed realistic hd 8 k high resolution


油画
prompt: portrait of bob barker playing twister with scarlett johansson, an oil painting by ross tran and thomas kincade


水彩画
prompt: a girl with lavender hair and black skirt, fairy tale style background, a beautiful half body illustration, top lighting, perfect shadow, soft painting, reduce saturation, leaning towards watercolor, art by hidari and krenz cushart and wenjun lin and akihiko yoshida


 fantasy  original nature signature dream 8k

original 
nature 
signature 
sky
ebonyxh 
elden_ring  妖精
absurdres 
highres 
1girl 
armor 
erdtree_(elden_ring) 
full_body 
holding 
holding_sword 
holding_weapon 
long_hair 
outdoors 
shield 
solo
sword 
walking 
weapon 
white_hair
shadow
smile
light

1girl 
backlighting 
backpack 
bag 
bangs 
blue_jacket 
blue_skirt 
blush 
brown_eyes 
brown_hair 
buttons 
carrying_bag 
classroom 
closed_mouth 
collared_shirt 
cowboy_shot 
desk 
hair_over_shoulder 
highres 
jacket 
light 
long_hair 
looking_at_viewer 
nagidango
original 
plaid 
plaid_skirt 
shirt_skirt 
smile 
standing 
swept_bangs 
uniform 
white_shirt window

1boy 1girl absurdres arms_between_legs autumn_leaves bangs basketball_hoop basketball_uniform black_jacket black_socks blue_skirt blurry blush bottle brown_eyes brown_footwear closed_eyes closed_mouth highres jacket jealous light light_particles long_sleeves looking_at_another looking_at_mirror milk_bottle mirror mochigome_(ununquadium) open_mouth original people plaid plaid_scarf pleated_skirt red_hair red_scarf reflection scarf shadow shirt shoes short_hair sitting skirt smile socks sportswear standing uniform white_shirt

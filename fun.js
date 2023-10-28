///////////////////////////
        var img= document.createElement('div');
        //imgDiv.id="f1img"
        img.style.width="50px";
        img.style.height="50px";
        img.style.position="absolute"
        img.style.backgroundImage="url(goat.gif)"
        img.style.backgroundSize="cover"
        img.style.zIndex="9999"
        document.body.appendChild(img)
        //let img = document.querySelector('.f1img')
        // 定义小图片的旋转角度
        let deg = 0
        // 定义小图片位于网页左侧的位置
        let imgx = 0
        // 定义小图片位于网页顶部的位置
        let imgy = 0
        // 定义小图片x轴的位置
        let imgl = 0
        // 定义小图片y轴的位置
        let imgt = 0
        // 定义小图片翻转的角度
        let yyyf = 0
        // 定义一个计数器
        let index = 0

        window.addEventListener('mousemove',function(xyz){
            // 获取网页左侧距离的图片位置

            // 多去网页顶部距离图片的位置

imgx = window.pageXOffset + xyz.x - img.offsetLeft - img.clientWidth /2
imgy = window.pageYOffset + xyz.y - img.offsetTop - img.clientHeight /2

            // 套入公式，定义图片的旋转角度
            deg = 360*Math.atan(imgy/imgx)/(2*Math.PI)
            // 每当鼠标移动的时候重置index
            index= 0
            // 定义当前鼠标的位置
            let xxxf = event.clientX
            // 当鼠标的x轴大于图片的时候，提普安就要对着鼠标，所以需要将图片翻转过来
            // 否则就不用翻转
            if(img.offsetLeft<xxxf){
                yyyf=-180
            }else{
                yyyf=0
            }
        })
        setInterval(()=>{
            // 设置小图片的旋转和翻转
            img.style.transform = "rotateZ("+deg+"deg) rotateY("+yyyf+"deg)"
            index++
            // 在这里设置小图片的位置和速度，并判断小图片到达鼠标位置时停止移动
            if(index<50){
                imgl+=imgx/50
                imgt+=imgy/50
            }
img.style.left = window.pageXOffset + imgl+"px"
img.style.top = window.pageYOffset + imgt+"px"
        },10)
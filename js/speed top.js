<script>
//JS缓慢返回顶部
let back=document.getElementById('goTopBtn');
let duration = 500;
back.onclick = function () {
    let l = document.documentElement.scrollTop;
    console.log(l);
    let s = l / 600 * 25;  //路程/时间=s *25每隔25ms秒 动的路程
    let st = setInterval(function () {
        l -= s;
        if (l <= 0) {
            l = 0; //当l<=0时，设置l=0
            clearInterval(st);
        }
        document.documentElement.scrollTop = l;
    }, 25)
}
</script>
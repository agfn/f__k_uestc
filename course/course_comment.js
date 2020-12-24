// 评教脚本，打开 Chrome / Firefox, F12 即可食用

// 教材评教
function fill_textbooks() {
    let list = document.querySelectorAll(".qBox");

    console.log(list);

    for (let i = 0; i < list.length; i++) {
        let q = list[i];
        console.log(q)

        let text = q.textContent;
        if (text.match("选择题") != null || text.match("主观题") != null || text.match("单选题")) {
            console.log("title");
            continue;
        }

        let qtext = q.querySelector(".qName").textContent;
        let ans = q.querySelectorAll("li");
        if (ans.length == 2) {
            if (qtext.match("错误") != null) {
                // 没有错误
                ans[1].querySelector("input").checked = "true";
            } else if (qtext.match("有助于") != null) {
                // 有助于
                ans[0].querySelector("input").checked = "true";
            }

        } else if (ans.length == 5) {
            console.log(ans);
            ans[0].querySelector("input").checked = "true";
        }
    }

    let adv = document.querySelectorAll("textarea");
    for (let i = 0; i < adv.length; i++) {
        adv[i].value = "无";
    }

    let btn = document.querySelector("#sub");
    btn.click();
}

// 教师评教
function fill_teachers() {
    list = document.querySelectorAll("input");
    for (let i = 0; i < list.length; i++) {
        list[i].checked = 'true';
    }

    let t = document.querySelector("textarea");
    t.value = "好好好好好好好好好好好好好好好好好好好好好好好好好好好好好好好好好好好好好好好好好好好好好好好好好好好好好好好好好好好好好好好好好好好好" ; 
    let btns = document.querySelectorAll("[type=button]");
    console.log(btns);
    for (let i = 0; i < btns.length; i++) {
        console.log(btns[i].value);
        if (btns[i].value.match("下一步")) {
            btns[i].click();
            break;
        }
    }
}

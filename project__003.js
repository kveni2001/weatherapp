const searchBtn = document.querySelector(".search button")
const searchBox =document.querySelector(".search input")
const apiKey="dffd57f2be80a26fa33cf1f5d7f3544a";
const weatherIcon =document.querySelector(".weather-icon")
const apiUrl=`https://api.openweathermap.org/data/2.5/weather?unit=matric&q=`;
searchBtn.addEventListener("click",()=>{
    chechWeather(searchBox.value)
})
async function chechWeather(city){
    const response= await fetch(apiUrl + city+ `&appid=${apiKey}`);
    var data = await response.json();
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp/10) +"°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity+ "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
     if (data.weather[0].main == "Clouds"){
        weatherIcon.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACfklEQVR4nO2XT2sTURTFx50L050uu4hg/QIutFC/hH++gVio4Ep0rTs3rmxVcOkmirgpzdyEtkFsRUgkllal74aktE0stKjVtPfFHJnE2LHMNJOYTGZgDlyyyDw4vzn33pkxjEiRIkUKrfDIGMakMYeHRtwIpfkpQ2HKACaNYqggYDffqrBAwMl8kCHgZLTDigD+R4539fkQkBsBSueAyoXmb3YESAwFPIHHx4C3p4GtUfdajDevCwIAmgN7YKadeTuE/dwgBhuHt43VNl7Mt8reTn5vJzitSqvnOwHInhnMioXbnrcGtRMA6/o/Z2tPYihNT+Bddq6aUtWKySKkZINY0sRyY3YJJ3oHYL3bOG0ea9t0AlA53zhXfnUV8x/XQaxdy2Qpm1y7ErgEOHkbxHKkeWpBKKmTkjv9g7D2vM3gTnkc+VISmcIm0oWfyBQ2kC/NYKd8vfF/+cNNz+bJBtG/JBKxhrH6lzGsrL040sjy2kvMfzq6bdxLKq9XEOslxEEKi/G25ntRppKJngA0IGwA24mxvpun5lBTXwDyb575AkBK1vsCkFku+gPAstcXgLT64VMCujcJJFdxiljfI6VzpGTXVPt1fxLQ1hxsEeunM4W9s12ZN7l22WT55pdhcgfR1utG5+atJ+OAzdM/bSXjntsmCHeeDiehpEoKw20BGj0fAMPkmIK+3x5A6fcDN8ouKbBe8tD/wWsf+puA7IYdYNtLC+WCC6AX2ieg9N2BG2XnSrHcCvMa3fT8nZBS+lKwHmSyb7Jc9GTeDkEs3wNgvphclVGjG01/xsmk0g+s6Sf2KRElv4jla4prRCzXZgs43pX5SJEiRYpkeNBv9Ov+hg8P27wAAAAASUVORK5CYII="
     }
     else if(data.weather[0].main == "Clear"){
        weatherIcon.src ="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABsUlEQVR4nO2ZzU7CQBSFJ8TUN9CFuMcVpobQxAdzKUvfgIlGA76E7uARZCkYSFhUkz7EMddWLWM7xeH2Z8jc5CQESjlfO733TBDClStXrva2MBQDDMWNsNa8FPiSbRBIm7cNAlnmbYGAznwTIFBkjknCAeRU4dV7OACej4HZGbD0gY8gFr2edYCno/iYxt2BuxYwbQNhAESXetExk3b8HdkEgJEHzLvFxlW9nQOPhzUDjD1g3fu/+W+te/E5agGgJbAwuPKq5l3gtlUDwPR0d/NRInomygbYGFLUSbZ5YLdVGGx2J+5h92fCUqvkMh8lohZbxsTOjAfU57kBXjr8sSM326wu+AGWPm920gazd8b1HyWic3IGQEhxVSlAqAGQ4trsLuRBrPzqlpA0NK+FoGBWxUMsdzSfC1FFG5VM5jMh2AdZX43ZvOZTEL8/QuOfC2ByUlOYM4nRql7rCnNccXrkWbqhWTRhQyNNtpT9+PlRlg1qBUh3J2qHNCdoMNHEJtFr6vP02X0TN/WSV8IBGJY2AJY9pCqCaLb5Agg7zOdA2GVe+Ytp8POGK1euXO1dfQIP3ciBFRe34QAAAABJRU5ErkJggg=="
     }
     else if(data.weather[0].main == "Rain"){
        weatherIcon.src ="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACWklEQVR4nO2Xz2vUQBTHU/AgokcFLzWDHvwf/PVPqPQg6EkQbEEQQa968yK1idSDV9t/QNx5K3sRPUkrFATpe6vQVauidrJg9010JC3W1t002exOOoV84LEsG958v/u+k0k8r6KioiKL52/MASCeAOJngPxBEnPyCcl34vHGgtnvuUq9GY8B8TKQNmkliT9Jis97riGRb0nk39uJh78mkuuQb5Ymro58SiLPAHILiDsSeUkiPwbkk2u/N+OxvOJhkwnrk2g0zB5A/WBbMagfJrHoRzxsFC8ne8aagUzxQyiJfNWK+BrxadviYX1TgxUDgDxbhgFAbtky0CrFAPGqHQPEnXImoIczgdqiOQSk7wDqOUBuS+z0dVsccB98AdKPnjZXjxcSLyk+J4lVWYIh3YhOHjf6F9/nIWQ/Vnwld2xc+Ofh/0kg/wQ0o5kG1jLvgGDoOQV9N9sA6vkdF0opUyC9kCP/7sUHNibA7d1u4FueCM25a0C/zJ4A6ts7LpR6V534xm6+jX7M/Z5QR33WrYOMO5L4TC7xm00AceSA+Pe1RT7hFeHJW3OwhvpesvuBSpoI8i8gXqlTDEB8udE0ewuJr3CVY9M/jvphNCECNSuC6IWrPbdizIgfti+KQM2LMDL/Ss14LvVMww/a17cusl5+EI271DMVEailXouNTn4XnkM9UxFh9LV7MfVqkFwX6VkYP1D3uxYLogtdFxozcmRq5ZIfqtdZuc7dcxgcnjb7RKgm/TD6LEL1TkxF1wbNdd6epVJqrm1Qaq5tUGqubeBkrisqKio8m/wBuRuM8aYnfRUAAAAASUVORK5CYII="
      }
     else if(data.weather[0].main == "Dizzle"){
        weatherIcon.src ="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACWklEQVR4nO2Xz2vUQBTHU/AgokcFLzWDHvwf/PVPqPQg6EkQbEEQQa968yK1idSDV9t/QNx5K3sRPUkrFATpe6vQVauidrJg9010JC3W1t002exOOoV84LEsG958v/u+k0k8r6KioiKL52/MASCeAOJngPxBEnPyCcl34vHGgtnvuUq9GY8B8TKQNmkliT9Jis97riGRb0nk39uJh78mkuuQb5Ymro58SiLPAHILiDsSeUkiPwbkk2u/N+OxvOJhkwnrk2g0zB5A/WBbMagfJrHoRzxsFC8ne8aagUzxQyiJfNWK+BrxadviYX1TgxUDgDxbhgFAbtky0CrFAPGqHQPEnXImoIczgdqiOQSk7wDqOUBuS+z0dVsccB98AdKPnjZXjxcSLyk+J4lVWYIh3YhOHjf6F9/nIWQ/Vnwld2xc+Ofh/0kg/wQ0o5kG1jLvgGDoOQV9N9sA6vkdF0opUyC9kCP/7sUHNibA7d1u4FueCM25a0C/zJ4A6ts7LpR6V534xm6+jX7M/Z5QR33WrYOMO5L4TC7xm00AceSA+Pe1RT7hFeHJW3OwhvpesvuBSpoI8i8gXqlTDEB8udE0ewuJr3CVY9M/jvphNCECNSuC6IWrPbdizIgfti+KQM2LMDL/Ss14LvVMww/a17cusl5+EI271DMVEailXouNTn4XnkM9UxFh9LV7MfVqkFwX6VkYP1D3uxYLogtdFxozcmRq5ZIfqtdZuc7dcxgcnjb7RKgm/TD6LEL1TkxF1wbNdd6epVJqrm1Qaq5tUGqubeBkrisqKio8m/wBuRuM8aYnfRUAAAAASUVORK5CYII="
       }
     else if(data.weather[0].main == "Mist"){
        weatherIcon.src ="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACuUlEQVR4nO2XTW8SURiFJ42p/6AupC5c4aqmsYpxrYn6J0gHazTanW7toqnGxMYdxCaWujARI7Z0+GhdyEJNjZpAGmnL14IiVojGBcyMsDjmMq0F2vlguDOAmZOchMUwOc/ce9/3vQxjyZIlS/+t4Gam4GYeMH0b3sOg7n6DQGP4foPAYeH7BQJK4XsBAmrhKJmxAGSk+vWeHgEix4D4KSA7Cuw4JJPfcTsQHpKe6bkVmBsAojag4ABKF5RNnnlrk/7j6QUA7yCQHFEP3ur0aeDZ0S4DLAwCubH2w+85Nya9oysAZAukdHz5VidHgCcDXQCIDncevrRrciaMBmhqUqSSaDmwWl1wNFcn2s3uQIclpZJW+NKuSYml1bHZUPkKG+TzriCPw+yN/cGbbE3WyykRXzKe9gBidnpjB8vx23LhiZe2qooAdYik2B5AdpTe7KQGEEnX6AN8d9AbAK8Fy5dvLe/8lgMIpdXDf8642z/IHtnx4h6jVz7f9NkZf7TYCODfbA78eqOI4rfxzg5xVnYLTekOvw/x8HwjwHy8+RD/yLOdV6GY3ZjwRAsvPWcaAWbeCfQBwkPGhJ8I8CdcXGWlEeBmREAovV+J/IliZxCFc61jtv49v6dxrnxVqRc8WhNVK5FWz34UcSeQwrr3Er1RQq2UXg/z8CXU+4GafYkqJkLSO+8uJc0DIJ5cERDQ0NTkvLhVxeSq8O99VAFIL9ACcXtVwAsdK+H7ejD8uveiMdOoK1SxsRwfUtpOs2ti08GWM2mCzz9t4uf8SXOvlM4IP6y2GjciAqbfC/U+4d+oIZyp1ccOMjuRAfD+B7FewX7NHTf/Uu/UAKDVpgM4pfBhWgCPXy0qQjC0pNYLzDDL8dukoOgC0FKFTDFXyfU1AMvxBUN7gaHhg3yeXHF1AViyZMmSJUZFfwHx7f8l5bpOEgAAAABJRU5ErkJggg==" 
        
      }
       document.querySelector(".weather").style.display="block"
    }

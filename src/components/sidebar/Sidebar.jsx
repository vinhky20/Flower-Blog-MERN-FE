
import './sidebar.css';


function Sidebar(props) {
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://images.pexels.com/photos/6744887/pexels-photo-6744887.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                <p>
                    Hoa là tặng vật của thiên nhiên ban tặng cho con người. Mỗi loài hoa với đủ sắc màu như: Trắng, đỏ, vàng, tím, hồng…
                    luôn là một thứ ngôn ngữ nói với chúng ta bao điều thầm kín. Thưởng thức hoa không phải chỉ người giầu sang, phú quí,
                    mới có thể chiêm ngưỡng được, mà người bình thường cũng có quyền thưởng ngoạn vẻ đẹp huyền diệu của mỗi loài hoa.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="fab sidebarIcon fa-facebook-square"></i>
                    <i className="fab sidebarIcon fa-twitter-square"></i>
                    <i className="fab sidebarIcon fa-pinterest-square"></i>
                    <i className="fab sidebarIcon fa-instagram-square"></i>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid, Paper, Avatar, Chip, Divider, Button, Grow, TextField } from '@material-ui/core';
import ReplyIcon from '@material-ui/icons/Reply';
import ReplyAllIcon from '@material-ui/icons/ReplyAll';
import ForwardIcon from '@material-ui/icons/Forward';
import SendIcon from '@material-ui/icons/Send';
import './Inbox.scss';
import Editor from '../editor/Editor';

class Inbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
        }
    }

    handleChange = () => {
        this.setState(state => ({ checked: !state.checked }));
    };

    changeStatusCollapse = () => {
        let { checked } = this.state;
        this.setState({
            checked: !checked,
        })
    }

    render() {
        const { checked } = this.state;
        return (
            <React.Fragment>
                <Grid container spacing={16} className="Inbox">
                    <Grid item xs={12}>
                        <Paper className="Inbox__papper">
                            <Typography variant="headline" gutterBottom>
                                New App
                            </Typography>
                            <Divider />
                            <div className="header">
                                <Chip
                                    avatar={<Avatar src="https://material-ui.com/static/images/remy.jpg" />}
                                    variant="outlined"
                                    label="Frozen Yoghurt"
                                    style={{ "marginBottom": "5px" }}
                                />
                                <Typography variant="caption" gutterBottom>
                                    <b>From:</b> <q>FrozenYoghurt@gmail.com</q>
                                </Typography>
                                <Typography variant="caption" gutterBottom>
                                    <b>To</b>: <q>Vivienne30@gmail.com</q>
                                </Typography>
                            </div>
                            <div className="content">
                                <Typography gutterBottom>
                                    {`
                                    Chào Phát,

                                    Chị là Ngọc – nhân viên Phòng Chăm sóc Khách hàng của VietnamWorks. Cám ơn em tin tưởng lựa chọn VietnamWorks để tìm kiếm công việc mơ ước.

                                    Em biết không, hồ sơ xin việc (resume) chính là hình ảnh đầu tiên em thể hiện với các nhà tuyển dụng. Càng đầu tư hoàn thiện hồ sơ của mình, cơ hội đặt chân vào công ty em hằng mơ ước sẽ càng rộng mở. Hiểu được tầm quan trọng này, topITworks – chuyên trang thông tin nghề nghiệp dành riêng cho ứng viên ngành IT thuộc VietnamWorks sẽ đồng hành cùng em để hoàn thiện hồ sơ ứng tuyển.

                                    Chị đã xem qua và đánh giá hồ sơ của em rất tốt; bên cạnh đó, để hoàn thiện hồ sơ và gây ấn tượng hơn với nhà tuyển dụng, chị xin gợi ý một vài thông tin như sau:

                                    ·          Kỹ năng chuyên ngành:

                                    -           Đây là mục riêng biệt thể hiện những kỹ năng mà em sử dụng thành thạo nhất, do đó không nên ghi chung vào Kinh nghiệm để tránh gây nhầm lẫn cho nhà tuyển dụng

                                    -           Liệt kê các ngôn ngữ lập trình và framework tương ứng của ngôn ngữ đó, kèm theo số năm kinh nghiệm cho từng ngôn ngữ

                                    

                                    ·          Dự án

                                    Phần này cũng nên tách khỏi Kinh nghiệm làm việc để có thể miêu tả chi tiết hơn dự án của mình. Tóm tắt ngắn gọn các dự án mà em đã tham gia ở trường học hay công việc cùng những sản phẩm nổi bật với các thông tin như sau:

                                    -           Vai trò và trách nhiệm: mô tả ngắn gọn

                                    -           Thời gian

                                    -           Số lượng thành viên trong dự án/đội/nhóm

                                    -           Ngôn ngữ sử dụng và frameworks tương ứng

                                    -           Thành tựu nổi bật (nếu có): ví dụ Hoàn thành dự án trước thời hạn; Nhận được lời khen, nhận xét tốt hoặc giải thưởng từ Nhà trường, Công ty

                                    Cập nhật ngay hồ sơ của em bằng cách truy cập vào đường dẫn sau: http://www.vietnamworks.com/ho-so

                                    Em có thể tham khảo thêm Bí Kíp Tạo Hồ Sơ Ấn Tượng Dành Riêng Cho Dân IT.

                                    Nếu em cần tư vấn thêm về hồ sơ tìm việc, đừng ngần ngại, hãy phản hồi email này hoặc gọi điện thoại số (024) 6 262 7932.

                                    Chúc em thành công và thăng tiến trong sự nghiệp.
                                    `}
                                </Typography>
                            </div>
                            <div className="footer">
                                <Button variant="outlined" color="primary" style={{ "marginRight": "10px" }} onClick={this.changeStatusCollapse} onChange={this.handleChange} aria-label="Collapse">
                                    <ReplyIcon /> Reply
                                </Button>
                                <Button variant="outlined" color="primary" style={{ "marginRight": "10px" }}>
                                    <ReplyAllIcon /> Reply All
                                </Button>
                                <Button variant="outlined" color="primary" style={{ "marginRight": "10px" }}>
                                    <ForwardIcon />Forward
                                </Button>
                            </div>
                            <Grow in={checked} style={(!checked) ? { "display": "none" } : { "display": "block" }}>
                                <Paper elevation={12} className="Inbox__papper Inbox__reply">
                                    <div>
                                        <TextField
                                            id="filled-email-input"
                                            label="To (Cs/Bcc)"
                                            type="email"
                                            name="email"
                                            className="formControl"
                                            autoComplete="email"
                                            margin="normal"
                                            variant="filled"
                                        />
                                    </div>
                                    <Editor />
                                    <div className="buttonSend" align="right" style={{ "margin": "10px 0" }}>
                                        <Button variant="contained" color="primary" >
                                            Send <SendIcon className="iconButton" />
                                        </Button>
                                    </div>
                                </Paper>
                            </Grow>
                        </Paper>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export default Inbox;
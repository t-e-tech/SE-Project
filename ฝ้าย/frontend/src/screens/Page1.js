
import { BrowserRouter as Router } from 'react-router-dom';
import './Page1.css';
import Avatar from 'react-avatar';
import { FormControl, FormControlLabel, FormGroup } from '@mui/material';
import { CheckBox } from '@mui/icons-material';

export default function MyAccount() {
    return (
        <Router>
            <div className="container-fluid">
                <nav>
                    <div className="row flex-noerap">
                        <div className="col-sm mt-4" style={{ fontSize: '30px', color: '#09979B' }}>
                            ข้อมูลของฉัน
                        </div>

                        <div className='col-1 mt-3'>
                            <Avatar src='https://www.woolha.com/media/2020/03/eevee.png' variant="square" size='80px' />
                        </div>

                        <div className='col-2 mt-5' style={{ fontSize: '20px' }}>
                            <button className="btn" type="button" style={{ background: '#ffcb42' }}>
                                ไปยังบัญชีผู้ใช้
                            </button>
                        </div>
                    </div>
                </nav>

                <div className="card w-80" style={{ margin: '10px', padding: '5%' }}>
                    <div className="card-body">
                        <form className="form">
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label" style={{ fontSize: '20px' }}>ชื่อร้านค้า</label>
                                <div className="box1 " style={{ fontSize: '20px' }}>
                                    ชื่อร้านค้า
                                </div>

                                <div><br />
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label" style={{ fontSize: '20px' }}>ชื่อ</label>
                                        <div className="box1 " style={{ fontSize: '20px' }}>
                                            kanthida thongmee
                                        </div>
                                        <div><br />

                                            <div className="form-group row">
                                                <label className="col-sm-2 col-form-label" style={{ fontSize: '20px' }} >หมายเลขโทรศัพท์</label>
                                                <div className="box1 " style={{ fontSize: '20px' }}>
                                                    064-4285976

                                                </div>

                                                <div><br />

                                                    <div><br />
                                                        <div className="form-group row">
                                                            <label className="col-sm-2 col-form-label" style={{ fontSize: '20px' }}>
                                                                Email
                                                            </label>
                                                            <div className="box1" style={{ fontSize: '20px' }}>
                                                                kanthida.th@ku.th
                                                            </div>
                                                        </div>
                                                    </div >

                                                    <div><br />
                                                        <div className="form-group-row">
                                                            <label className=" col-form-label" style={{ fontSize: '20px' }}>
                                                                ช่องทางที่สะดวกจัดส่ง
                                                            </label>
                                                            <div className="box1" style={{ fontSize: '20px' }}>
                                                                J&T<p />
                                                                <p className="form-text small text-muted" style={{ fontSize: '15px', textAlign: 'end' }}>
                                                                    * เลือกได้มากกว่า 1
                                                                </p>
                                                            </div>

                                                        </div>
                                                    </div>

                                                    <FormControl component="fieldset"><br />
                                                        <FormGroup aria-label='position' row>
                                                            <FormControlLabel value="end"
                                                                control={<CheckBox />}
                                                                label="J&T"
                                                                labelPlacement='end'
                                                            />
                                                            <FormControlLabel value="end"
                                                                control={<CheckBox />}
                                                                label="DHL"
                                                                labelPlacement='end' />
                                                            <FormControlLabel value="end"
                                                                control={<CheckBox />}
                                                                label="ไปรษณีย์ไทยEMS"
                                                                labelPlacement='end' />
                                                        </FormGroup>
                                                    </FormControl>



                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Router>

    );
}
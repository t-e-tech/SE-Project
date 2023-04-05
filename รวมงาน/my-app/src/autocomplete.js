/*
import InputAddress from "react-thailand-address-autocomplete";

function Page7(props) {
    const {
        houseNumber,
        setHouseNumber,
        subdistrict,
        setSubDistrict,
        district,
        setDistrict,
        province,
        setProvince,
        zipcode,
        setZipcode,
        onSelect,
        setError
    } = props;

    return (
        <div className="form-group row">
            <label className="col-sm-2 col-form-label">รายละเอียดที่อยู่ :</label>
            <div className="col-sm-10">
                <textarea className="form-control" required rows={2} defaultValue={""}
                    style={{ resize: "none" }}
                    value={houseNumber}
                    onChange={(e) => {
                        setHouseNumber(e.target.value);
                        console.log(houseNumber);

                        setError("");
                    }}
                />
            </div>
            
            <div><br /></div>

            <label className="col-sm-2 col-form-label">แขวง / ตำบล :</label>
            <div className="col-sm-10">
                <InputAddress required
                    style={{ width: "100%", outlineStyle: "none" }}
                    address="subdistrict"
                    value={subdistrict}
                    onChange={(e) => {
                        setSubDistrict(e.target.value);
                        setError("");
                    }}
                    onSelect={onSelect}
                />
            </div>
            
            <div><br /></div>

            <label className="col-sm-2 col-form-label">เขต/อำเภอ :</label>
            <div className="col-sm-10">
                <InputAddress required
                    style={{ width: "100%", outlineStyle: "none" }}
                    address="district"
                    value={district}
                    onChange={(e) => {
                        setDistrict(e.target.value);
                        setError("");
                    }}
                    onSelect={onSelect}
                />
            </div>

            <div><br /></div>

            <label className="col-sm-2 col-form-label">จังหวัด :</label>
            <div className="col-sm-10">
                <InputAddress required
                    style={{ width: "100%", outlineStyle: "none" }}
                    address="province"
                    value={province}
                    onChange={(e) => {
                        setProvince(e.target.value);
                        setError("");
                    }}
                    onSelect={onSelect}
                />
            </div>

            <div><br /></div>

            <label className="col-sm-2 col-form-label">เลขไปรษณีย์ :</label>
            <div className="col-sm-10">
                <InputAddress required
                    style={{ width: "100%", outlineStyle: "none" }}
                    address="zipcode"
                    value={zipcode}
                    onChange={(e) => {
                        setZipcode(e.target.value);
                        setError("");
                    }}
                    onSelect={onSelect}
                />
            </div>
        </div>
    )
}

export default Page7;
*/
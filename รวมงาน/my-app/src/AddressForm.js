/*
import Address from "./autocomplete";

export default function AddressForm(props) {
    const {
        name,
        setName,
        phone,
        setPhone,
        setError,
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
        fullAddress,
        setFullAddress,
        onSelect
    } = props;


    return (
        <form className="form" role="form" autoComplete="off">
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">ชื่อ-นามสกุล :</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div><br />
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">หมายเลขโทรศัพท์ :</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" required
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                    </div><br />
                    <Address
                        setError={setError}
                        houseNumber={houseNumber}
                        setHouseNumber={setHouseNumber}
                        subdistrict={subdistrict}
                        setSubDistrict={setSubDistrict}
                        district={district}
                        setDistrict={setDistrict}
                        province={province}
                        setProvince={setProvince}
                        zipcode={zipcode}
                        setZipcode={setZipcode}
                        fullAddress={fullAddress}
                        setFullAddress={setFullAddress}
                        onSelect={onSelect}
                    />
                </div>
            </div>
        </form>
    )
}
*/
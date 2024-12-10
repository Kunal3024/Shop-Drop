import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from  "../../pages/Admin/Admin"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import AdminLogin from "../../pages/Login/Adminn/AdminLogin";


const AdminPath = () => {
	const dispatch = useDispatch();
	// const { adminLoading } = useSelector((state) => state.AdminAuth);
	useEffect(() => {
		// dispatch(loadAdmin());
	}, []);
	return (
		<div>
			<Router>
				
					<Routes>
						<Route
							path="/admin"
							element={
									<Admin />
							}
						/>
						<Route
							path="/admin/login"
							element={
									<AdminLogin />
							}
						/>
                    </Routes>
			</Router>
		</div>
	);
};

export default AdminPath;

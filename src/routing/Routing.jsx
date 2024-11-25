import { React, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, NotFound } from "../modules/index";
import PublicRoutes from "./PublicRoutes";
const ProtectedRoute = lazy(() => import("./ProtectedRoute"));
const View = lazy(() => import("../modules/blogs/View"));
const DetailedView = lazy(() => import("../modules/blogs/DetailedView"));
const Create = lazy(() => import("../modules/blogs/Create"));
const BulkUpload = lazy(() => import("../modules/blogs/BulkUpload"));
const BulkErrorDetail = lazy(() => import("../modules/blogs/BulkErrorDetail"));
const BulkUploadListing = lazy(() =>
  import("../modules/blogs/BulkUploadListing")
);

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path="/" element={<Login />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/view" element={<View />} />
          <Route path="/details/:id" element={<DetailedView />} />
          <Route path="/update/:id" element={<Create />} />
          <Route path="/upload" element={<BulkUpload />} />
          <Route path="/bulk-list" element={<BulkUploadListing />} />
          <Route
            path="/bulk-errors/:session_id"
            element={<BulkErrorDetail />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;

import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";

// Use throughout your app instead of plain `useDispatch` and `useSelector`

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

// Custom hooks

export const useQuery = () => new URLSearchParams(useLocation().search);
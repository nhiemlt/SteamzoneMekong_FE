import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import Pay from '../../customers/pay/index'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Pay"}))
      }, [])


    return(
        <Pay/>
    )
}

export default InternalPage
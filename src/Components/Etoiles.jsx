import StarIcon from '@mui/icons-material/Star';

function Etoiles(niveau) {

        switch (niveau.niveau) {
            case 1:
                return (
                    <>
                        <StarIcon sx={{ color: 'gold' }} />
                        <StarIcon sx={{ color: 'black' }} />
                        <StarIcon sx={{ color: 'black' }} />
                        <StarIcon sx={{ color: 'black' }} />
                        <StarIcon sx={{ color: 'black' }} />
                    </>
                )
            case 2:
                return (
                    <>
                        <StarIcon sx={{ color: 'gold' }} />
                        <StarIcon sx={{ color: 'gold' }} />
                        <StarIcon sx={{ color: 'black' }} />
                        <StarIcon sx={{ color: 'black' }} />
                        <StarIcon sx={{ color: 'black' }} />
                    </>
                )
            case 3:
                return (
                    <>
                        <StarIcon sx={{ color: 'gold' }} />
                        <StarIcon sx={{ color: 'gold' }} />
                        <StarIcon sx={{ color: 'gold' }} />
                        <StarIcon sx={{ color: 'black' }} />
                        <StarIcon sx={{ color: 'black' }} />
                    </>
                )
            case 4:
                return (
                    <>
                        <StarIcon sx={{ color: 'gold' }} />
                        <StarIcon sx={{ color: 'gold' }} />
                        <StarIcon sx={{ color: 'gold' }} />
                        <StarIcon sx={{ color: 'gold' }} />
                        <StarIcon sx={{ color: 'black' }} />
                    </>
                )
            case 5:
                return (
                    <div style={{display: 'inline'}}>
                        <StarIcon sx={{ color: 'gold' }} />
                        <StarIcon sx={{ color: 'gold' }} />
                        <StarIcon sx={{ color: 'gold' }} />
                        <StarIcon sx={{ color: 'gold' }} />
                        <StarIcon sx={{ color: 'gold' }} />
                        
                    </div>
                )
            default:
                return (
                    <>
                        <p>None</p>
                    </>
                )
        }
}

export default Etoiles
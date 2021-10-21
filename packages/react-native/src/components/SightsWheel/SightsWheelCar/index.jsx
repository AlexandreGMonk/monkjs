/* eslint-disable global-require */
import React from 'react';
import { Image } from 'react-native';

export default () => (
  <Image
    source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAAErCAQAAAABehWsAAAAAmJLR0QA/4ePzL8AAB1JSURBVHja7Z15fFXF2ce/SQghJGQBAoGAQAKKBQmCAhZQFIrWBauouOJa64bYRXF5q7jVjapUW63aWkXqRhVUXKpSbQVcQECRnSBLQoCQBQjZc98/mDM59+bm3rPee87hPOej93JzZuaZ+c0z88wzM8+TgFeoA6m0J031SzX1VFPv/qoluIzfHPLpTme60IUcuognm5QIaaqppZwKKiingjJKKKaEEnYR8EGyhr9+9CeffArIp4BOFubdQDGb2MgmNrKRIufKnDNBSqIPgxjOcEbRNUZlNrKNNSxnOT9Q5IPUNiUzkgmMZxgddaetpYZ6qlW/pJNMOskG+NjFlyxhCcuo9UFqoV6cw0TGkR7lvQNsZjt7xVMmv9VFSJNGR7LpLP7rRm9y6UUPukTlqp7lLGUeSw93kLpzHlMYTWIbfy9nNUUUUcRmithtqT6YzwD6058B9KdPhDcXcherOCwpkdNYQCOBMM9OFvIA59I3ZtxkMpYbeY6vORiGnyZeZcDhBlA2t7IpTGOU8DJTyYuz2lLIDcxhSwhvDTxN58MFoG48RFUreL7itwxyFJ+dw3SivdxEO+8D9CTVYQe4UQ7k9RBnFXwbxOlqJngXoFTuZF9QdWv4Bx+L79c4jt90wdk+EpgSMji/RS8vQnQx24KqWcoMugD3iX/PdKBi0yyUhnZACrcFDdJV3NSmRupKyufDIIC2Ml0uV68Tvz3vQL53Ct4U9bwLs4O00eUM9wZASdwRpNTuYRrtVX+fLH6f50Delwrexql+G85iVW3q+QOpboeoD5+rqlTHbLJC3pgk/jbfgdy/InibHmIAmMpeVa3WMszNEF0aNIp/TP8w75wh/vqeA/m/RfA2t9VfejIvqPPd7s75qR0PB60vrm3DBDVFvPG6A+twgpxDCdu9tqpquIQCt0GUxxJVBd6lW5tv3iDeecaBtUjhgOBuaNi/d+I5VS0rucRNEA2lWLJ+kOsjmnHvF+/d78iavBV1gXA2u1VAPRdxj9hBNEE1E23kmChvzxdvXubIulwhuNsUYc7pxrtBw14P50N0CfWS4fda6XKtSVnJO1ND6kyN4O/0CG8lcJNqmVHsQBNXEF1Dk2R2lgaNp5dY1TfQwaE1elHU5oMo7w1ig6x5LVc5F6LrRZMHaOJmTSmuFe9/7tg6HSub/uQob2bxvmrYe8KZSvllUorqOV9jmvdEijscPDp8JnhcGnUfO4mHZDcN8Iqh8xW20iQapG37TI1p+kpLWKGDQRolG/5KDW9fINX2AAudNYgXStZqOVVzqkdFmm8drgwp1oX9YW0mrduiZQHyvnNU8hy51dzIuZpT5UpV/QqHg1Qgu+DnmvZl+6mUiAXOGPSS5agd4JcG9KbdjtXsWuhXquWqFurOKpnib06owDOSnSd1pDpJqhnXu2CBnsBCWcs7NY4uq2WKW+PN/gWSlU90HNHIkxtqq0hyhR2lG5sFx838VlOKHmyUC5KJ8WS9K7sEI1t0nNpOldtpTZyEW+goylQLdS3HSgvYI60QXeLH+Dypdh+jOU0n1Rx2N26iMdJIFOB1MjWkOEUuTN6IF9NTJMu3aU7Tha9Umo/btsrGUSm538JYDSlmyvfHxoPhDmyXa3Gt88opMk2A5Zr6otOokBJZg0ZmRa1DO9kpl8SD3elyqBuo6f00ZqnMr4tdCdGhVdBKlY2ujF9HWbCeIC0WP401q2mUiqIf0SR106U+d0gTTMO9lMJjqu4WYAu3RDwlruyZPRVrRq+Xm8bRDrH34neqQS5AI/c7z/Som04OOuEQoIY5jG1D5ztd3hWJMf1RFPxwxJXC1SwK6nMBihiNN6gjd6rUCOVc7ktc1Goxkiy1wvTYsjhXFHt5GJPISKYxt9XVkQBV3Gvp1eT4U1eeoDbMbaYVvMStnEZv8Z5yxLqvMXOHUfpY3C14kyISyQQ60Jve9GrDElfNn3mUvXiPunEl17RpH69mN7sZKNSkEXwTS9a+C3uBJdzTzBJuitkt8vhQAhN4lYqobXF6bNnapQGeGr7g9+47NGiY2jGGB/gmZBZWP5fHcrhLoq7NBWwFO1jHUpbyrRecxhigbIYwmGMYzOCQ1eCtzDKCvTHqIiDaz4NAI/uBBkrYzjYOcLhTBZ/LozUZdKcr1zFVKBoxpGPkjQKftNA1ZjYAjRo4u8mZyScttEd85sQSpO4+SO4Babff/pqoLB4g+cOdL0meo0oahK6X4kuSUykgDWJdYy9JPkgxGPD84c7DIOX4kuR0kDLFdsTBIHeaPmkBKWZzkj8juUCSfN3OBSD5khRTm4M5kHzdzh/ufJB8SfIlyacQ2kszANn6d8N9xSFW1ESFaPHOsQXJH+5iMuD5w50LbA5GQOpABgCNQoB9cqAktQx2Ab/lnQqSP9jF2OZgRpJ8kFwx3PnkD3c+SL4k+ZLkkzMkyQdJL0gBsZhNiJ0k+cOdPqpnPwDt9Hqw8CXJBQOefpCShL+pgFyc+eQ4kHJEmnJxutkn220O+kHydTsXSJI/I7kIJF+3ixlI+m+fO2G4SyCXnvSkN93IIpMsMskkC8gkEWhHJ6BK9exiG8UUs41SGr0PUrwkqScDGcjRHMWR9NTk5Ssz7HqkmVI2s4YfWMOaGPvN8qgkZTKSERzPCHItyjGRnvSUrjYrWMNqvuYr1orTPA4EST8pkU3OsrWUJH7KvSwNiupq71PFh9zGcFu9wvaNGCPQBknabRs847iIc6IcfNrLTraxkx1UUUkVVVRSSYD9NKJ4aMkmk0wyySCLPPI4gjzyyG3DcpbBqZwKlPMRb/OBLX5dDEqSft9C20XU7378aHkl+nEjl7QxsFWzhnWsZT1r+ZEaw2W0J4+jGST+a8v7Xi3/5iXetXzBflCEDk6382ZXgnTB19HinMfyVpjBrZnveZ5rGGLYC1Jk6sPP+T3vSSfrwc8uZhlzI9gmmXJOqJWyZZAaK+k4PmrVQLuZy1TL1IXodBTXM0/lQ78lcPZLGr01a6HlItfj7a2KEi3SKsphrip6V4AAFfydiXGKYJHIT3lUxphocdf5vP7DwWHpw1g4JzxRevW2hqYERWkNsJzLHREW6lieojyIsz2WRHmaY8Y5oVY6XxTytgV5JfN0UDN8HJ9AAW1SBy7nhyAOXzTdgR4XOf3OTsZvFIU8azqnDD4PkqDxjrS2JTI5CKilEQKEa6E7dDi8N0z3iULuNQ3RElXg7Rk26W7WUDIzVMEUvxRKtDFSnBP+3U6GnxWF3Giyf7ZEZN3EEJxPA1gjOX7DhKPus0Ue79jJ7NuikPNM5dISruYLsnEHZaiWCdcYzmW0HDZtpMWikBNNqfF1klU3+dtPl6ucUsOhIo+0fAkThpRw8keZyOM1GUItF3fREewXvE81aQyospNNhUnjg1SOlKPJuI8eEbzPM5g+gXqRg22rwVRRQJ0FU+dq3EjDBPebDeegRJHK06Nn6SEr7vj9RHx+60qQlAuoeYa7qYHtCmMgmdmVXSE+J7ou6OKhceAQLTfcTWMGkpkNv/+wT+Q1woUgKfPovwznYDtIVpxvqOODkF7pHsqVoRPfdi5I1hyMXOBakM4T7fUNW0yD1NVuSTJ3vuF9EbDnaFOrLXcOdobOg8dDkqr4THz7hasgymGMBSDFbE4ye1LInQPeZGGrX2HKqGMApHaa3smjD33pIIMLmgVpPk+TAIykR+xjr8Z1sGsBaQAz2McWtvAjdcazy+BCnuIbachoeXqYrvDXIqdrXQNRFxoEz+aOpXQLE/B0GY/wM737VIlMYkGY+KlKpua36O4SeS10DUjKdt13JvNJajMs40Fe1h4d/SLVBle4Z48FVR4k8qp1zWbFB4Lje0znVBaxdT9lVGiCUAtUAX8Nc9pgJ1v5kX0csl2VGYnw2IrWcyQAF/CmCyDKYhftARjMDybzup9scYg5h37k0ztEfWvmL9zR9jHn00PC2a7nIc6wKaLjY6KMV1whR1cIbtfZkHdnJvNMSBDy7+gT/uXLVKNlHf/gWFurPUaUVCl6qLPpXcHtfbaVkMiEoHO8pWKkCaJJUnsJ8D75tlc7Ue6sTHA8RJ2oEbwW2lzSyWyQKGyhZ/Af+1Mpzz5Pi1HVXxAlPuV4kC4xvdWnnVJ5VcL0iVpnSOB/EqLYWQHOEmXuMLHPGxt6S3D6UExKS+AZCdOvWn6+QP54nckCxupo8BT2iVKHOxqijlQLPo/TlcrMWuojeVhHnoVYbtmRvZncpOPtf9k+HVtBU+Qcob0D5nCXqTJ7yQ581aEfjhf/bGSABSBV69iAmGrRKt5eekNw+ZgubXC2yVJnyWsMADxg4U2JmQRYpukC/6EVgqJRDnAsRB3lOfBRukxIZkEqkDaZtESQhVu18h/ODI1vlvNfqUQ4lX5OGgA7+Epjin48bkG5m9kgZu7jE0H2Yq1M5Ee9R3SP5uuGzt9ZUjYo5mk8H5TIixHtkdqN09+Iz76JpIrb5PUavQtcxUq5Q9s2Iy9qPC29QFR9tP0OKAxRCmdIJUcb/YaTIv59GO9p3Oz4UXz2SSRdmPf2avC5k8Pb/I1OlEZ9cxAPaGJkKyuF0unMAe80EZejlCWa3h8ctd5VnMF3/Em4doxE+8RncqI8Ot4p6lb6mXwvTiVo2U39NaM9MOC1DHZanNq0Z07UM96VQDLT2MhvSY/wXgYjxbdagINCj7g7QpKjeVNl/EuLqN0pz/eatLxCueWV5jiIkuXl5nGa3r9TVfu2tLsOqncqeZbTw+zIDuEPqmvVvwOYL/95T5iL+QmcxNwgNxhVUVTwluc3mqpWJN4+x3EgnSG3ObVM932kZSIQUQWvCdnmq2YRf+cebmUGD7FAOuRQ9iNOA+gm7dEBlnOp3D/K4kweVVllW3aZtIK0T9NpiCdi5uTJ6KPtGvf8oDRtg1Sqo+QNLSazMfLekdJzNrO3zYSfaQYpwJ81VG6c40GaqKEW40PStA3SOvHGgSil7uH24ClgdFR8v2Ou+PaaBpB+lMIafWcqqQ3PPk55yjQMdgl8KY/pRAPpK/HGeCYym81hSqxhARe3AKQUv5hjeJILw2p4tbzFC3zGHeLfWnS7V5hCf6A990T1/tHEQns9hJik+RoWJ5OELhbglahXNSulweld/s108ulPX/qQRBP7KGElayOV2J8H+VpObHUs50nOlVcv/yR+n6FBkmbKjbImV7gAMEeJrBS1fZObo0qSYrC9VHv2atrEXYwglTwKyCWF4dzCW/J2W64OSYJXWSVKuMfzIF0sttWbNNVVkaRMYyApVEJRmEP5PeRftVCzZPhcHfZjN1IyM8W3OazR8H6VXK6aAik85UoVUqvx9Evx7TZPg3Q5BcL6qW3zssoaSYoMkvYj9v8np9U+noUogeni2/Mar5ZVynWo5SClCUtTPeWa03wqzafXexakkxkMQIPmYyo2SpIyI+3Sde9aOa51reU+W51CN4vPf1GsMUWl/SDpu080V9xlyuZCT0LUhzNDumNcJSnXEEh10rPbNE+CdKMwSa/QuN9ksyTp1e0Uekasnodqv3vjGurI1XKhjxMkqbtBkLbJ03wXew6ks4WP4z0R7ZkxlCSjIMGL4nNynNxI20dTZA1rdaTaL3Z507W2h3aQcqR2p5c+Ekp7bpQjGm6jDE4V3/6pK12zOL2QoNXmoB0k5eDEXt2VaWB+SM/zBp0rTkStF1ZKPbKEkCWLQVL2a40ELn1dfJ7vigtjege713WnPCgNBI6RJFgkV0uneAailrq8oTtttT0gJchdpQoDFWqU58zP9gxI54hRYbWBi842gZQl9nD3CedNekkBaYJnQDrVsBzZBpKZwQ7gf8I1S397IwfFjBLlYPeBd0A6KN2Ve2NWGioUqQrprtQDIMGn4nO8J0CaIGvV5CWQPpHVS/AASONDup5HQFomDIvdxCaZmylFuif0GEiN8lbfCNeDdJzYwtzKRm+B1HJzbZjrQVLOZ39hML2DQfrWcyAt9x5Iy6T6muxykIaFdDsPgbRLHKvsYGHc1nhQquA/IM5COQYk5YxYhanqeWPAKxQmso2GoyApIFm8VaFsT+0zVT1lDD/G1SApfgBXGM5BAamjtSB1sgQkxe9igatBUpwFrjINkqXDXUcx1dcatIErVCQ+810NkuIdfZOzQLJGjtQgudk0pIwDm02DZOmcpMxI+01Wr0wcZ0o3Gfc4npQgN1uKnCVJGRZJEvLegXtnpZ7C78JeeX5OP9WJA6PJ2laMsQZps+tnpQLTcgTIub29E0HaIT67uxak3t4HyUAcLoeRMpuWOhWk/ZaBlONakKwwkCGD8aRYB1InyySpzPUg5YTUxDGS1MlySXLvcNfVEpDqnDwnuV+SulgqSSlOBKkyRDbdR50tmZNsGO6UlfEB01XUNWE6klJDrAaOURwUxmp9kKQD4DqnSVIHHyRJKU4HqcZ0FZvEic8k117NtKbD1jlZktwvS9ZKUoozQVLOTrtVkhS7dYN356QWtupdClKzrpZz6XBnTU+MHzWE1MODw12iKLFZk8d674LkaElq73I5auG8vSWSZCFIKZaBlOx6kOotBcmy4a690MQaDN1qCybFZlftWpDqQkYXcyBZdsbBSrVBcTRQ7lqQlKPFWc6SpBQbQKpwLUgVITUxRrVWg2TlPOIdkMxJki4dUQtISSG2Ah8k85Kk+LFNsAqkxJC1thnq4nqQKi0BqTlEABwFUi/xWeJakHaLzx6mcmnSswTSM9xZCdIO14K0I6Qm5iQp0WpJavJBcj5IviSpOe/tVZDa6Ywc40QqFppZD1M7Yg4GKV+sC0qkg0v3UY1QHdqZCpKia+sztuuko8TnetxMiquaI70pSQpI61wN0rqQ2jgCpISQVfLhLknrLQDJ8uHOOkka7CmQzPh10dXxE61GPaJup8TJXOVqkBTvxUNN3KG3HKRG2cja6ZgwO5cDhQeQnTrD+ziNtgj7XTb9DOeha3SyC6RzWdpqODDr28opFIjgI+k0GTI5TpKkZe9jo+wbw1jOdUEDwnEeAamlBsODfu3AbN6XcaZipYwJ6isiDGuL/TiObaoo3u+o3GooUY3PdD1IF4mafK76bQjfq+q9NIoTBCWHf1rFUi+R4XaN72fyiordXZwlRvAmEWa7s+tBUlqkVpz/SOBaqmWNG3g46qijBB1/xSqWckWGeqb78ymXTDfzV9KYJP61Ai/QFlGbMUB3Fqo65Y+M1ZD+UvH2HKsY6ioy1HdLtB+LVaz/wALx7U+eAOklUZu7OIcyVT3/ofGi6WXi/ZetYihTZKjXl04Sd9OgqsChxxtxX64WtalS1ayc8zWnnyrSvGQVQ2kiQyM3ZkexKQiigx4JCtyT5pDOt0jXNuAVUvLioIKH0pcMlYEXAT5x8SaFmkqkl3OAem5jgq6NTF273VpAqhdrn2RDd3IOcBXnyROr7+AVWiC/rWUUj+m0bNpwS+uAEM50wzl0530CNGlc6rmBBsupP81A6ptF6tnWMbRLZGnGAVoC0/kPXqKN7BZrQP30O9Gis6xjp0hkadaVYKqnQJpiotPeIVr0D1pe1mY0VfS6dJPVqvEUSK+bSKvrMp02VUCnY1efolKyD5J7QKr3QXIu2TDcHfBBco8kpfut61xJUtx6dvJb1yLSdQ9ZG0jKla8ufutaROkhY5QFIO31QbKYOtoHkvmN75mt9pfc+8w00Q5pviQd1pLkg2QVKZJ00DqQyn2QbALJ0ZJ0Lwmufe515nBXLfT5Dh45oeDJ4a5lwOvqt68FlCR8CjVZuZhtiRbU029hC0ix3Gg8f6UVpGIfJAupc8j4ZDFIeX4LWwhShQ+ScynblyRfkvwW9iXJlyQTIJX4IFlIimvQSmtBqhCh4tJcHMbX8yo4bBKf/f02dupw1xK13AfJPCkmgVKrQdrog2Q5SCW+JDmVEuUFoJ2+JDmVuomjkXu1XmDQrzgM8FvZJPXQJ0d6QCoVSnimST++PumckfSAFGC1+DbEb2dTpNujs56ryoqXukK/nZ0qST5IVlEfHyTnk+IHcIMdIH0vfBUM8M8MmSLdPp31gFQtFrRJHOu3tGHKFTbw/fYMd/CV+Bztt7XpwW69dq+R+kBa7INkGUg6HNgbBSnBb22TM9J6u0D6QewldjHluPzwpp/YLUnNLBXfTvRb2xAlSJ/Oq+0CCf4rPn/ut7chKhC7spX2DXfwgfgcry2MbQRF1K00ll+aSD1SfC7T4xFcL0jfCbNguiafva1JMc9fzakuBKgdt7NI2t6MBFgZJz6/tJfR58S13icNpU5mtUhfw2SXQTSCFaprzfPJNJCH4pRuvL2s/kIUU2wwCsw4lYvZv7rGx0omTwvn8wECNHKnoUXIANlBO9jLbiqVoqiJBnO4RlXdnfzSdMgfuymVW6TvzAAB9vAzgzkprgg/tp/pF0w7Hp9KrarS67jW7p5lmFK4ieIg7w0vq6Jv6KVvRR6/sp/xcaKoahPsDmVNUNV38bDjFshpXB8UHCXAelNzyUgZy6Kb/cwnyunvfhO5dOQ+VRCOQ89ibjHt59UaGsRTclg/9OzjbpPy/qrI6d3YVGGadPyfZSqfPF6grpU7mO95kBGGfJBbM8BdxOchHB3gYdNXukfImXhibCrSkT2iwGdN59WTh6kI47mnhL9xOQUxhCeJU3hG1qwlcMMfLRiesuTwvjJ2xunbRZFNXGUJ6JexqFX0B0XVf42bKLRVsjKYzAtBGpyiez4gT8mZoXS+kGGKTopdr2svF6XN3G5Rnn2Zzqdh4sQoc8L/eIqrGW7SIBXceBOYyWfUtyqtmUWcbyg6RzgVfpHM9/nYjt2jVM35uIUinM3FvB4U8ib0qWcVc7iL8yk05A4+nRO4gedY1kaHKOcJCzXNFD6UOX8aJmaoBjLTuGfxumykuVypzZ+oZkkdw4mMZWQU57wBtrGRzWxnG1vZTnGI69n2pJFJLjl0I49+FFAQwRdFBQt4k08sDPORzDwmie8rGK/1RpK10tQShesTWzy0tmMEv2E+u3U4C9xPOeWUR5TG0OcHZjHeWD+PqIq8KktYFT8fZ4PYLtn4mhwbSzqCSdzNW3KNZs2zlueZyhE2rSfnqKwqcb3G2pd1kpU1NlU3VJ0dx3U8zvtsbFPNCESc09byKjOYaGunSuBZWeIGczqiFRN+ZxYySnwv4TS+j2EXaU8+R9KX3hxBb/rQI6RGDRygmlJ2UUYpW9nMZrbK2Gp2QvQ0N4jv2ziRrfE3oqSrNJjyuB/4SiWbbLLJiCMPj8j22G4iQrrlPfo1yVY1p3N404OyLUqdZTZO4HFVzOKrDmOI7pbtsFse4HIQzVCt2G89TCG6RbZBBcOcyeKVKn1r9mF4znWarH0lxzuXzV9QIxl9SWM4Oq/QVdJIfMDgaaqY0TjVWv8djwVbjERT5Y5RtTy65WAapjL7b+QvXCKvIHqR0hjHXSykUZ4FmuAOxge0Mt/s4DWmMczxZ4O0U28uZDbfhFg96qxfgNg3tffgw7DOBA7wLav4jpWs1uYV21HUjqMYwlAKKQx7VLqBC5jvHpAgi38yMYLkNLKBVaxiJevYbujQbqwsGEcxkJ8wkIEcGXHLcTc3m4o+GweQADpxAqMZE3VfqI4iNslnK01xBCWZHhxBvnyiGUcDrGUxi1mq/T65s0BqGSaOZTRjGK3pPkU9OylmJ8WUUEIJOymmyqZO1J0cupJDLj04gp7kkauxVQ6yjC9YwlKtHiCdDlIL9aGQQgoZSr6u0puooIJK+f9KaqmhjoM0cIBGGRwyuGt0AjJIogOptCeDDLLJIINMMuhMVwPnJXaKIXoVG2Il7/G0CXRiCEMYymAG2LqzY5Ya2cY61rCOtayNxwa4Uww3mRTQXzwD4nzFrJldbGcrRRSxhSK2WXp6w8UghepTvcilF7n0pju9yaWHTZdkDlJGKWWUsYcdlFDMNkrjDYo7QAqvc2WTJf7LJotMUuhIe9JIJl3MPq1logo4QAP1VNPIPiqpYp94yinTFmQq3vT/bEGMp3rOTxsAAAAASUVORK5CYII=' }}
    style={{
      width: 42,
      height: 60,
      position: 'absolute',
      top: (116 - 60) / 2,
      left: (116 - 42) / 2,
    }}
  />
);
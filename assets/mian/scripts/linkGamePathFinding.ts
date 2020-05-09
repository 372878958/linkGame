export default class linkGamePathFinding {

    protected pathObj: any = {};
    public startPoint: cc.Vec2 = cc.Vec2.ONE;
    public endPoint: cc.Vec2 = cc.Vec2.ONE;
    protected path: cc.Vec2[] = [];//List<Point>
    protected mapArr = {};//Dictionary<string, MapInfo>
    protected m_row = 100;
    protected m_col = 100;
    //搜索上限
    protected findMax: number = 5000;

    // 添加障碍点
    addBlockPoint(point: cc.Vec2[]) {
        if (point && point.length) {
            for (let v of point) {
                let id = v.y + "*" + v.x;
                if (this.pathObj[id] == null) {
                    // if (this.startPoint.y + "*" + this.startPoint.x != id && this.endPoint.y + "*" + this.endPoint.x != id) {
                    this.pathObj[id] = 1;
                    // }
                    break;
                }
            }
        }
    }

    // 删除障碍点
    remBlockPoint(point: cc.Vec2[]) {
        if (point && point.length) {
            for (let v of point) {
                let id = v.y + "*" + v.x;
                if (this.pathObj[id] != null) {
                    delete (this.pathObj[id]);
                    this.pathObj[id] = null;
                }
            }
        }
    }

    // 重置
    reset(row: number, col: number) {
        this.m_row = row;
        this.m_col = col;
        this.removeAllBlock();
    }

    // 删除所有障碍
    removeAllBlock() {
        this.pathObj = {};
    }

    // 该坐标是否是障碍
    protected isBlock(pos: cc.Vec2): boolean {
        let id = pos.y + "*" + pos.x;
        return this.pathObj[id] != null;
    }

    // 线段转换
    protected sortPath(pos: M_Point, isBegin: boolean) {
        for (let v of this.m_line) {
            if (v && !v.check) {
                if (pos.equal(v.pos1)) {
                    v.check = true;
                    if (isBegin) {
                        this.path.push(cc.v2(pos.row, pos.col));
                    }
                    this.path.push(cc.v2(v.pos2.row, v.pos2.col));
                    this.sortPath(v.pos2, false);
                    break;
                } else if (pos.equal(v.pos2)) {
                    v.check = true;
                    if (isBegin) {
                        this.path.push(cc.v2(pos.row, pos.col));
                    }
                    this.path.push(cc.v2(v.pos1.row, v.pos1.col));
                    this.sortPath(v.pos1, false);
                    break;
                }
            }
        }
    }

    // 寻路
    search(start: cc.Vec2, end: cc.Vec2): cc.Vec2[] {
        // 设置起始和结束点
        this.startPoint = start;
        this.endPoint = end;
        // 
        this.m_line = [];
        this.checkLink(new M_Point(this.startPoint.x, this.startPoint.y), new M_Point(this.endPoint.x, this.endPoint.y));

        this.path = [];
        // 从起点开始查找
        this.sortPath(new M_Point(this.startPoint.x, this.startPoint.y), true);
        return this.path;
    }


    //直线连接的两个对象
    //直线连接的两个对象
    protected isDirectLink(_begin: M_Point, _end: M_Point) {
        //若传入的是同一对象，连线的长度为0，返回false row col 分别表示精灵的行号和列号
        if (_begin.row == _end.row && _begin.col == _end.col) {
            this.m_line = [];
            return false;
        }
        //行号相等时
        if (_begin.row == _end.row) {
            let steps = _begin.col - _end.col;
            let direction = steps / Math.abs(steps);
            let row = _begin.row;
            //判断两个对象直线距离上是否存在精灵
            for (let i = 1; i < Math.abs(steps); ++i) {
                let col = _begin.col - i * direction;
                //获取连线中间的精灵
                let sprite = this.pathObj[col + "*" + row];
                //若不为空，连线的长度为0，返回false
                if (sprite != null) {
                    this.m_line = [];
                    return false;
                }
            }
            this.m_line.push(new M_Segment(_begin, _end));
            return true;
        }
        //列号相等时
        if (_begin.col == _end.col) {
            let steps = _begin.row - _end.row;
            let direction = steps / Math.abs(steps);
            let col = _begin.col;
            for (let i = 1; i < Math.abs(steps); ++i) {
                let row = _begin.row - i * direction;
                let sprite = this.pathObj[col + "*" + row];
                if (sprite != null) {
                    this.m_line = [];
                    return false;
                }
            }
            this.m_line.push(new M_Segment(_begin, _end));
            return true;
        }
        return false;
    };

    // 两条线
    protected isOneCornerLink(_begin: M_Point, _end: M_Point) {
        if (_begin.row == _end.row && _begin.col == _end.col) {
            this.m_line = [];
            return false;
        }
        //第一种拐点 M_Point（）是自定义的一个函数 
        let point_1 = new M_Point(_begin.row, _end.col);
        //用拐点分别连接两个精灵 
        let islink_1 = (this.isDirectLink(_begin, point_1) && this.isDirectLink(point_1, _end));
        //若连接成功 
        if (islink_1) {
            //若拐点上无精灵，则返回true 
            if (this.pathObj[point_1.col + "*" + point_1.row] == null) {
                return true;
            }
        }
        this.m_line = [];
        //第二种拐点 
        let point_2 = new M_Point(_end.row, _begin.col);
        let islink_2 = (this.isDirectLink(_begin, point_2) && this.isDirectLink(point_2, _end));
        if (islink_2) {
            if (this.pathObj[point_2.col + "*" + point_2.row] == null) {
                return true;
            }
        }
        this.m_line = [];
        return false;
    }

    // 三条线
    m_line: M_Segment[] = [];
    protected isTwoCornerLink(_begin: M_Point, _end: M_Point) {
        let setSegment = (point_1, point_2, point_3, point_4) => {
            this.m_line = [];
            this.m_line.push(new M_Segment(point_1, point_2));
            this.m_line.push(new M_Segment(point_2, point_3));
            this.m_line.push(new M_Segment(point_3, point_4));
        }
        if (_begin.row == _end.row && _begin.col == _end.col) {
            this.m_line = [];
            return false;
        }
        //若两个对象在同一行，且在边框最外的两行
        if (_begin.row == _end.row && (_begin.row == 0 || _begin.row == this.m_row - 1)) {
            let addline = -1;
            //若在第一行，则在下面划线，否则在上面
            if (_begin.row == 0) {
                addline = 1;
            }
            let p_1 = new M_Point(_begin.row - addline, _begin.col);
            let p_2 = new M_Point(_begin.row - addline, _end.col);
            setSegment(_begin, p_1, p_2, _end);
            return true;
        }
        this.m_line = [];
        //若两个对象在同一列，且在边框最外的两行
        if (_begin.col == _end.col && (_begin.col == 0 || _begin.col == this.m_col - 1)) {
            let addline = -1;
            if (_begin.col == 0) {
                addline = 1;
            }
            let p_1 = new M_Point(_begin.row, _begin.col - addline);
            let p_2 = new M_Point(_end.row, _end.col - addline);
            setSegment(_begin, p_1, p_2, _end);
            return true;
        }
        this.m_line = [];
        //向上画线
        for (let _row = _begin.row + 1; _row <= this.m_row; ++_row) {

            if (_row == this.m_row) {
                //如果begin点在最外一行，判断end点对应边框上的点是否存在，再判断是否能连接
                if (_row - 1 == _begin.row) {
                    if (this.pathObj[_end.col + "*" + (_row - 1)] == null) {
                        let link = this.isDirectLink(_end, new M_Point((_row - 1), _end.col));
                        if (link) {
                            this.m_line = [];
                            let p_1 = new M_Point(_row, _begin.col);
                            let p_2 = new M_Point(_row, _end.col);
                            setSegment(_begin, p_1, p_2, _end);
                            return true;
                        }
                    }
                }
                this.m_line = [];
                // 若end点在第八行
                if (_row - 1 == _end.row) {
                    if (this.pathObj[_end.col + "*" + (_row - 1)] == null) {
                        let link = this.isDirectLink(_begin, new M_Point((_row - 1), _begin.col));
                        if (link) {
                            this.m_line = [];
                            let p_1 = new M_Point(_row, _begin.col);
                            let p_2 = new M_Point(_row, _end.col);
                            setSegment(_begin, p_1, p_2, _end);
                            return true;
                        }
                    }
                }
                this.m_line = [];
                //若begin点和end点列对应的第八行上是否为空
                if (this.pathObj[_begin.col + "*" + (_row - 1)] != null || this.pathObj[_end.col + "*" + (_row - 1)] != null) {
                    break;
                }
                let link_1 = this.isDirectLink(_begin, new M_Point(_row - 1, _begin.col));
                let link_2 = this.isDirectLink(_end, new M_Point(_row - 1, _end.col));
                if (link_1 && link_2) {
                    this.m_line = [];
                    let p_1 = new M_Point(_row, _begin.col);
                    let p_2 = new M_Point(_row, _end.col);
                    setSegment(_begin, p_1, p_2, _end);
                    return true;
                }
            }
            else {
                this.m_line = [];
                let point_1 = new M_Point(_row, _begin.col);
                //若连线第一个拐点为空
                if (this.pathObj[point_1.col + "*" + point_1.row] != null) {
                    break;
                }
                let link_1 = this.isOneCornerLink(point_1, _end);
                let link_2 = this.isDirectLink(_begin, point_1);
                if (link_1 && link_2) {
                    return true;
                }
            }
        }
        //向下画线
        this.m_line = [];
        for (let _row = _begin.row - 1; _row >= -1; --_row) {
            if (_row == -1) {
                if (0 == _begin.row) {
                    if (this.pathObj[_end.col + "*" + 0] == null) {
                        let link = this.isDirectLink(_end, new M_Point(0, _end.col));
                        if (link) {
                            this.m_line = [];
                            let p_1 = new M_Point(_row, _begin.col);
                            let p_2 = new M_Point(_row, _end.col);
                            setSegment(_begin, p_1, p_2, _end);
                            return true;
                        }
                    }
                }
                this.m_line = [];
                if (0 == _end.row) {
                    if (this.pathObj[_begin.col + "*" + 0] == null) {
                        let link = this.isDirectLink(_begin, new M_Point(0, _begin.col));
                        if (link) {
                            this.m_line = [];
                            let p_1 = new M_Point(_row, _begin.col);
                            let p_2 = new M_Point(_row, _end.col);
                            setSegment(_begin, p_1, p_2, _end);
                            return true;
                        }
                    }
                }
                this.m_line = [];
                if (this.pathObj[_begin.col + "*" + 0] || this.pathObj[_end.col + "*" + 0] != null) {
                    break;
                }
                let link_1 = this.isDirectLink(_begin, new M_Point(0, _begin.col));
                let link_2 = this.isDirectLink(_end, new M_Point(0, _end.col));
                if (link_1 && link_2) {
                    this.m_line = [];
                    let p_1 = new M_Point(_row, _begin.col);
                    let p_2 = new M_Point(_row, _end.col);
                    setSegment(_begin, p_1, p_2, _end);
                    return true;

                }
            }
            else {
                this.m_line = [];
                let point_1 = new M_Point(_row, _begin.col);
                //cc.log(point_1.row+" "+point_1.col);
                if (this.pathObj[point_1.col + "*" + point_1.row] != null) {
                    break;
                }
                let link_1 = this.isOneCornerLink(point_1, _end);
                let link_2 = this.isDirectLink(_begin, point_1);
                if (link_1 && link_2) {
                    return true;
                }
            }
        }
        this.m_line = [];
        //向左画线
        for (let _col = _begin.col - 1; _col >= -1; --_col) {
            if (_col == -1) {
                if (0 == _begin.col) {
                    if (this.pathObj[0 + "*" + _end.row] == null) {
                        let link = this.isDirectLink(_end, new M_Point(_end.row, 0));
                        if (link) {
                            this.m_line = [];
                            let p_1 = new M_Point(_begin.row, _col);
                            let p_2 = new M_Point(_end.row, _col);
                            setSegment(_begin, p_1, p_2, _end);
                            //m_line.push(new M_Segment(_begin,p_1));
                            //m_line.push(new M_Segment(p_1,p_2));
                            //m_line.push(new M_Segment(p_2,_end));
                            return true;
                        }
                    }
                }
                this.m_line = [];
                if (0 == _end.col) {
                    if (this.pathObj[0 + "*" + _begin.row] == null) {
                        let link = this.isDirectLink(_begin, new M_Point(_begin.row, 0));
                        if (link) {
                            this.m_line = [];
                            let p_1 = new M_Point(_begin.row, _col);
                            let p_2 = new M_Point(_end.row, _col);
                            setSegment(_begin, p_1, p_2, _end);
                            //m_line.push(new M_Segment(_begin,p_1));
                            //m_line.push(new M_Segment(p_1,p_2));
                            //m_line.push(new M_Segment(p_2,_end));
                            return true;
                        }
                    }
                }
                this.m_line = [];
                if (this.pathObj[0 + "*" + _begin.row] != null || this.pathObj[0 + "*" + _end.row] != null) {
                    break;
                }
                let link_1 = this.isDirectLink(_begin, new M_Point(_begin.row, 0));
                let link_2 = this.isDirectLink(_end, new M_Point(_end.row, 0));
                if (link_1 && link_2) {
                    this.m_line = [];
                    let p_1 = new M_Point(_begin.row, _col);
                    let p_2 = new M_Point(_end.row, _col);
                    setSegment(_begin, p_1, p_2, _end);
                    //m_line.push(new M_Segment(_begin,p_1));
                    //m_line.push(new M_Segment(p_1,p_2));
                    //m_line.push(new M_Segment(p_2,_end));
                    return true;

                }

            }
            else {
                this.m_line = [];
                let point_1 = new M_Point(_begin.row, _col);
                //cc.log(point_1.row+" "+point_1.col);
                if (this.pathObj[point_1.col + "*" + point_1.row] != null) {
                    break;
                }
                let link_1 = this.isOneCornerLink(point_1, _end);
                let link_2 = this.isDirectLink(_begin, point_1);
                if (link_1 && link_2) {
                    return true;
                }
            }

        }
        this.m_line = [];
        //向右画线
        for (let _col = _begin.col + 1; _col <= this.m_col; ++_col) {
            if (_col == this.m_col) {
                if (this.m_col - 1 == _begin.col) {
                    if (this.pathObj[(_col - 1) + "*" + _end.row] == null) {
                        let link = this.isDirectLink(_end, new M_Point(_end.row, _col - 1));
                        if (link) {
                            this.m_line = [];
                            let p_1 = new M_Point(_begin.row, _col);
                            let p_2 = new M_Point(_end.row, _col);
                            setSegment(_begin, p_1, p_2, _end);
                            return true;
                        }
                    }
                }
                this.m_line = [];
                if (this.m_col - 1 == _end.col) {
                    if (this.pathObj[(_col - 1) + "*" + _begin.row] == null) {
                        let link = this.isDirectLink(_begin, new M_Point(_begin.row, _col - 1));
                        if (link) {
                            this.m_line = [];
                            let p_1 = new M_Point(_begin.row, _col);
                            let p_2 = new M_Point(_end.row, _col);
                            setSegment(_begin, p_1, p_2, _end);
                            return true;
                        }
                    }
                }
                this.m_line = [];
                if (this.pathObj[(_col - 1) + "*" + _begin.row] != null || this.pathObj[(_col - 1) + "*" + _end.row] != null) {
                    break;
                }
                let link_1 = this.isDirectLink(_begin, new M_Point(_begin.row, _col - 1));
                let link_2 = this.isDirectLink(_end, new M_Point(_end.row, _col - 1));
                if (link_1 && link_2) {
                    this.m_line = [];
                    let p_1 = new M_Point(_begin.row, _col);
                    let p_2 = new M_Point(_end.row, _col);
                    setSegment(_begin, p_1, p_2, _end);
                    return true;

                }

            }
            else {
                this.m_line = [];
                let point_1 = new M_Point(_begin.row, _col);
                //cc.log(point_1.row+" "+point_1.col);
                let id = point_1.col + "*" + point_1.row;
                if (this.pathObj[id] != null) {
                    break;
                }
                let link_1 = this.isOneCornerLink(point_1, _end);
                let link_2 = this.isDirectLink(_begin, point_1);
                if (link_1 && link_2) {
                    return true;
                }
            }

        }
        this.m_line = [];
        return false;
    }

    protected checkLink(_begin: M_Point, _end: M_Point): boolean {
        let islink = this.isDirectLink(_begin, _end);
        if (islink) {
            return islink;
        }
        islink = this.isOneCornerLink(_begin, _end);
        if (islink) {
            return islink;
        }
        islink = this.isTwoCornerLink(_begin, _end);
        if (islink) {
            return islink;
        }
        return false;
    }
}

class M_Point {
    row: number;
    col: number;
    constructor(row: number, col: number) {
        this.row = row;
        this.col = col;
    }

    equal(point: M_Point): boolean {
        return point.row == this.row && point.col == this.col;
    }
}

class M_Segment {
    pos1: M_Point;
    pos2: M_Point;
    check: boolean = false;
    constructor(v1: M_Point, v2: M_Point) {
        this.pos1 = v1;
        this.pos2 = v2;
    }
}